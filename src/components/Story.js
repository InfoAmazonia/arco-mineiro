import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/utils';
import debounce from 'utils/debounce';
import throttle from 'utils/throttle';
import { updateContext } from 'actions/context';
import { setMedia } from 'actions/media';

const Wrapper = styled.section`
  flex: 1 1 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  font-size: .8em;
  position: relative;
  h1,
  h2,
  h3 {
    line-height: 1.5;
  }
  h1 {
    font-size: 1.4em;
    margin: 0 0 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.3em;
    font-weight: 600;
  }
  h3 {
    font-size: 1.1em;
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
  article {
    width: 100%;
    position: relative;
  }
  ${media.phablet`
    padding: 1rem 0;
    font-size: 1em;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.8em;
    }
    p {
      margin: 0 0 1.5rem;
    }
  `}
  ${media.tablet`
    padding: 6vw 0;
    h1 {
      border-width: 2px;
      border-color: #000;
      font-size: 2em;
    }
    p {
      margin: 0 0 2rem;
    }
  `}
  ${media.desktopHD`
    padding: 6vw 0;
    font-size: 1.2em;
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
  transition top .5s linear;
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
    this.setScroll(this.props);
    this.node.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    setTimeout(() => {
      this.detectMedia(true);
    }, 800);
  }
  componentWillUnmount () {
    this.node.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
  componentWillReceiveProps (nextProps) {
    const path = nextProps.location.pathname;
    const scroll = nextProps.storyScroll[path];
    if(this.pathname !== path) {
      this.pathname = path;
      // Wait leave story animation
      setTimeout(() => {
        this.setScroll(nextProps);
      }, 200);
      // Wait library update
      setTimeout(() => {
        this.detectMedia(true);
      }, 750);
    }
  }
  _getMediaMiddleRatio (mediaRect = {}, offset = 0) {
    return (this.rect.height / 2)
      + (this.rect.top + this.node.scrollTop)
      + (-mediaRect.top - offset);
  }
  _getPathMediaClosestToMiddle () {
    const { mediaLibrary, setMedia, location } = this.props;
    let media, diff;
    if(location.pathname) {
      const mediaArray = Object.values(mediaLibrary).filter(m => m.pathname == location.pathname);
      media = mediaArray[0];
      if(mediaArray.length) {
        if(mediaArray.length > 1) {
          diff = Math.abs(this._getMediaMiddleRatio(media.rect, media.offset));
          for(let i = 0; i < mediaArray.length; i++) {
            let newDiff = Math.abs(this._getMediaMiddleRatio(mediaArray[i].rect, mediaArray[i].offset));
            if(newDiff < diff) {
              diff = newDiff;
              media = mediaArray[i];
            }
          }
        }
      }
    }
    return {
      media,
      ratio: diff
    };
  }
  detectMedia (force = false) {
    // Do not detect media while expanded
    if(this.props.media.expanded)
      return false;
    const { setMedia } = this.props;
    const media = this._getPathMediaClosestToMiddle();
    if(media.media !== undefined) {
      if(
        !this.props.media.id ||
        (
          this.props.media.id !== media.media.id &&
          (
            force ||
            (
              media.ratio <= 200 ||
              this.node.scrollTop <= 10
            )
          )
        )
      ) {
        this.refTop = media.media.rect.top + media.media.offset - this.rect.top;
        setMedia(media.media);
      }
    } else if(this.props.media && this.props.media.id && media.media == undefined) {
      this.refTop = 0;
      setMedia();
    }
  }
  setScroll (props) {
    this.node.scrollTop = props.storyScroll[props.location.pathname] || 0;
  }
  updateScrollHeight = debounce(() => {
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
  }, 300);
  handleScroll = throttle(() => {
    this.detectMedia();
    this.updateScrollHeight();
  }, 100)
  handleResize = throttle(() => {
    this.updateScrollHeight();
    this.rect = this.node.getBoundingClientRect();
  }, 200);
  // handleScroll = this.updateScrollHeight
  // handleResize () {
  //   this.updateScrollHeight();
  //   this.rect = this.node.getBoundingClientRect();
  // }
  render () {
    return (
      <Wrapper>
        {this.props.children}
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
