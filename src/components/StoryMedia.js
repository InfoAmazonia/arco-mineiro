import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { updateMedia, removeMedia } from 'actions/media';

import { connect } from 'react-redux';

const Wrapper = styled.span`
  border-bottom: 2px solid #f0f0f0;
  transition: all .5s ease-in-out;
  line-height: 1.5;
  position: relative;
  padding: .13em 0 .13em .13em;
  .fa {
    display: inline-block;
    line-height: 3;
    padding: 0 .5em;
    margin: 0 2px 0 .5em;
    font-size: .5em;
    color: #999;
    text-align: center;
    transition: all .5s ease-in-out;
  }
  ${props => props.active && css`
    border-color: rgb(255, 255, 180);
    background: rgb(255, 255, 180);
    .fa {
      color: #333;
    }
  `}
`;

class StoryMedia extends Component {
  constructor (props) {
    super(props);
    this._getIcon = this._getIcon.bind(this);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    // Wait transition
    setTimeout(() => {
      this.updateMedia();
    }, 600);
  }
  _getMediaId (media) {
    const { pathname } = this.props;
    return `${pathname}/${media.id}`.replace(/\//g, '-');
  }
  _getStoryOffset (props) {
    props = props || this.props;
    const { pathname, storyScroll } = props;
    return storyScroll[pathname] || 0;
  }
  updateMedia (props) {
    props = props || this.props;
    const { media, library, updateMedia, pathname } = props;
    const inLibrary = library[this._getMediaId(media)];
    const rect = this.node.getBoundingClientRect();
    if(!inLibrary || Math.floor(rect.top) != Math.floor(inLibrary.rect.top || 0)) {
      updateMedia({
        ...media,
        pathname,
        rect,
        offset: this._getStoryOffset(props),
        id: this._getMediaId(media)
      });
    }
  }
  _getIcon () {
    const { media } = this.props;
    let icon;
    switch(media.type) {
      case 'map' : {
        icon = 'map';
        break;
      }
      case 'video' :
      case 'youtube' : {
        icon = 'play';
        break;
      }
      case 'image' : {
        icon = 'image';
        break;
      }
    }
    return icon;
  }
  render () {
    const { activeMedia, media } = this.props;
    const id = this._getMediaId(media);
    const active = activeMedia.id == id;
    return (
      <Wrapper
        id={id}
        active={active}
      >
        {this.props.children}
        <span className={`fa fa-${this._getIcon()}`} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyScroll: state.context.storyScroll,
    pathname: state.router.location.pathname,
    activeMedia: state.media,
    library: state.mediaLibrary
  }
};

const mapDispatchToProps = {
  updateMedia,
  removeMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryMedia);
