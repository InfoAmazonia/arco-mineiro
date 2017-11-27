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
  ${media.desktop`
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      right: 0;
      background: #f0f0f0;
      transition: all 1s ease-in-out;
    }
  `}
  ${props => props.active && css`
    border-color: #bbb;
    background: #f0f0f0;
    ${media.desktop`
      &:before {
        right: -1000px;
        background: #bbb;
      }
    `}
  `}
`;

class StoryMedia extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    this.updateMedia();
  }
  componentWillUnmount () {
    this.props.removeMedia(this.props.media.id);
  }
  componentWillReceiveProps (nextProps) {
    this.updateMedia(nextProps);
  }
  updateMedia (props) {
    props = props || this.props;
    const { media, library, updateMedia } = props;
    const inLibrary = library[media.id];
    const position = this.node.getBoundingClientRect().top;
    if(!inLibrary || Math.floor(position) != Math.floor(inLibrary.position || 0)) {
      updateMedia({
        ...media,
        position: position
      });
    }
  }
  render () {
    const { activeMedia, media } = this.props;
    const active = activeMedia.id == media.id;
    return <Wrapper active={active}>{this.props.children}</Wrapper>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeMedia: state.media,
    library: state.mediaLibrary
  }
};

const mapDispatchToProps = {
  updateMedia,
  removeMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryMedia);
