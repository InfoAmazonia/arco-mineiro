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
  article {
    max-width: 640px;
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
    padding: 2rem 5vw 2rem 10vw;
  `}
`

class Story extends Component {
  constructor (props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.updateScrollHeight = this.updateScrollHeight.bind(this);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    this.pathname = this.props.location.pathname;
    this.node.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.setScroll(this.props);
    this.detectMedia();
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
        this.detectMedia();
      }, 100);
    }
  }
  getMediaRatio (position) {
    const threshold = window.innerHeight / 2;
    return (threshold / position)*1000;
  }
  detectMedia () {
    const { mediaLibrary, setMedia } = this.props;
    const mediaArray = Object.values(mediaLibrary);
    if(mediaArray.length) {
      const num = 1000;
      let media = mediaArray[0];
      let diff = Math.abs(num - this.getMediaRatio(media.position));
      for(let val = 0; val < mediaArray.length; val++) {
        let ratio = this.getMediaRatio(mediaArray[val].position);
        let newDiff = Math.abs(num - ratio);
        if(newDiff < diff) {
          diff = newDiff;
          media = mediaArray[val];
        }
      }
      if(!this.props.media || this.props.media.id !== media.id)
        setMedia(media);
    }
  }
  setScroll (props) {
    this.node.scrollTop = props.storyScroll[props.location.pathname] || 0;
  }
  updateScrollHeight () {
    const path = this.props.location.pathname;
    const scrollTop = this.node.scrollTop;
    const height = this.node.scrollHeight - this.node.offsetHeight;

    if(this.props.storyScroll[path] !== scrollTop) {
      let scrollState = {};
      scrollState[this.props.location.pathname] = scrollTop;
      this.props.updateContext('storyScroll', scrollState);
    }

    if(this.props.storyHeight[path] !== height) {
      let heightState = {};
      heightState[this.props.location.pathname] = height;
      this.props.updateContext('storyHeight', heightState);
    }

    this.detectMedia();
  }
  handleScroll = debounce(this.updateScrollHeight, 200)
  handleResize = debounce(this.updateScrollHeight, 200)
  render () {
    return (
      <Wrapper>
        {this.props.children}
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
