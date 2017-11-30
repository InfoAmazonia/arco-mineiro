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
  padding: .13em;
  .fa {
    display: inline-block;
    font-size: .6em;
    margin: 0 .5rem;
  }
  ${'' /* ${media.desktop`
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
  `} */}
  ${props => props.active && css`
    border-color: rgb(255, 255, 200);
    background: rgb(255, 255, 100);
    ${media.desktop`
      &:before {
        right: -1000px;
        background: #000;
      }
    `}
  `}
`;

class StoryMedia extends Component {
  constructor (props) {
    super(props);
    this._getIcon = this._getIcon.bind(this);
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
  _getIcon () {
    const { media } = this.props;
    let icon;
    switch(media.type) {
      case 'map' : {
        icon = 'map';
        break;
      }
      case 'video' : {
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
    const active = activeMedia.id == media.id;
    return (
      <Wrapper
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
    activeMedia: state.media,
    library: state.mediaLibrary
  }
};

const mapDispatchToProps = {
  updateMedia,
  removeMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryMedia);
