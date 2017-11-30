import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/utils';
import debounce from 'utils/debounce';
import { updateContext } from 'actions/context';
import { setMedia } from 'actions/media';

const Wrapper = styled.section`
  flex: 1 1 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 1rem;
  font-size: .8em;
  position: relative;
  h1 {
    font-size: 1.4em;
    margin: 0 0 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.1em;
    font-weight: 600;
  }
  h3 {
    font-size: 1em;
    font-weight: 600;
  }
  p {
    margin: 0 0 1rem;
    strong {
      text-transform: uppercase;
    }
  }
  img {
    display: block;
    margin: 2rem auto;
  }
  .story-content {
    max-width: 640px;
    position: relative;
  }
  ${media.phablet`
    padding: 2rem 10vw;
    font-size: 1em;
    h1 {
      font-size: 1.8em;
      padding-bottom: 2rem;
      margin-bottom: 4rem;
    }
    p {
      margin: 0 0 1.5rem;
    }
  `}
  ${media.tablet`
    padding: 2rem 15vw;
    h1 {
      border-width: 2px;
      border-color: #000;
      font-size: 2em;
    }
    p {
      margin: 0 0 2rem;
    }
  `}
  ${media.desktop`
    padding: 2rem 2rem 2rem;
  `}
  ${media.desktopHD`
    padding: 5vw 5vw 2rem 10vw;
    font-size: 1.2em;
    .story-content {
      margin: 0 auto;
    }
  `}
`

const MediaReference = styled.div`
  display: none;
  position: absolute;
  background: #eee;
  top: 0;
  right: -10px;
  margin-top: 0;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  transition top .2s linear;
  ${media.desktop`
    display: block;
  `}
`

class Story extends Component {
  static defaultProps = {
    mediaLibrary: {}
  }
  constructor (props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.updateScrollHeight = this.updateScrollHeight.bind(this);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    this.rect = this.node.getBoundingClientRect();
    this.refTop = 0;
    this.pathname = this.props.location.pathname;
    this.node.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.setScroll(this.props);
  }
  componentWillUnmount () {
    this.node.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  componentWillReceiveProps (nextProps) {
    const path = nextProps.location.pathname;
    if(this.pathname !== path) {
      this.pathname = path;
      setTimeout(() => {
        this.setScroll(nextProps);
      }, 100);
    }
    if(Object.keys(nextProps.mediaLibrary).length) {
      this.detectMedia();
      setTimeout(() => {
        this.detectMedia();
      }, 200);
    }
  }
  _getMediaMiddleRatio (position) {
    return (this.rect.height / 2) + this.rect.top - position;
  }
  _getMediaClosestToMiddle () {
    const { mediaLibrary, setMedia } = this.props;
    const mediaArray = Object.values(mediaLibrary);
    let media = mediaArray[0];
    let diff;
    if(mediaArray.length) {
      if(mediaArray.length > 1) {
        diff = Math.abs(this._getMediaMiddleRatio(media.position));
        for(let val = 0; val < mediaArray.length; val++) {
          let ratio = this._getMediaMiddleRatio(mediaArray[val].position);
          let newDiff = Math.abs(ratio);
          if(newDiff < diff) {
            diff = newDiff;
            media = mediaArray[val];
          }
        }
      }
    }
    return {
      media,
      ratio: diff
    };
  }
  detectMedia () {
    // Do not detect media while expanded
    if(this.props.media.expanded)
      return false;
    const { setMedia } = this.props;
    const media = this._getMediaClosestToMiddle();
    if(media.media !== undefined) {
      if(
        !this.props.media.id ||
        (
          this.props.media.id !== media.media.id &&
          (
            media.ratio <= 100 ||
            this.node.scrollTop <= 10
          )
        )
      ) {
        this.refTop = media.media.position - this.rect.top + this.node.scrollTop;
        setMedia(media.media);
      }
    } else {
      this.refTop = 0;
      setMedia();
    }
  }
  setScroll (props) {
    this.node.scrollTop = props.storyScroll[props.location.pathname] || 0;
  }
  updateScrollHeight () {
    const { location, storyScroll, storyHeight, updateContext } = this.props;
    const path = location.pathname;
    const scrollTop = this.node.scrollTop;
    const height = this.node.scrollHeight - this.node.offsetHeight;

    if(storyScroll[path] !== scrollTop) {
      let scrollState = {};
      scrollState[location.pathname] = scrollTop;
      updateContext('storyScroll', scrollState);
    }

    if(storyHeight[path] !== height) {
      let heightState = {};
      heightState[location.pathname] = height;
      updateContext('storyHeight', heightState);
    }
  }
  // handleScroll = debounce(this.updateScrollHeight, 100)
  // handleResize = debounce(this.updateScrollHeight, 100)
  handleScroll = this.updateScrollHeight
  handleResize () {
    this.updateScrollHeight();
    this.rect = this.node.getBoundingClientRect();
  }
  render () {
    return (
      <Wrapper>
        <div className="story-content">
          {this.props.children}
        </div>
        {this.refTop ? (
          <MediaReference
            ref={node => { this.mediaRef = node; }}
            style={{
              top: this.refTop + 'px'
            }} />
        ) : null}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyScroll: state.context.storyScroll,
    storyHeight: state.context.storyHeight,
    media: state.media,
    mediaLibrary: state.mediaLibrary
  }
}

const mapDispatchToProps = {
  updateContext,
  setMedia
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Story));
