import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import { updateMedia, removeMedia } from 'actions/media';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.span`
  border-bottom: 2px solid #f0f0f0;
`;

class StoryMedia extends Component {
  constructor (props) {
    super(props);
    this.scroll = 0;
  }
  componentDidMount () {
    this.node = findDOMNode(this);
  }
  componentWillUnmount () {
    this.props.removeMedia(this.props.media.id);
  }
  componentWillReceiveProps (nextProps) {
    const { media, currentMedia, updateMedia } = this.props;
    const path = nextProps.location.pathname;
    const scroll = nextProps.storyScroll[path];
    if(scroll !== this.scroll && media) {
      const position = this.node.getBoundingClientRect().top;
      updateMedia({
        ...media,
        position: position
      });
      this.scroll = scroll;
    }
  }
  render () {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storyScroll: state.context.storyScroll,
    currentMedia: state.media
  }
};

const mapDispatchToProps = {
  updateMedia,
  removeMedia
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoryMedia));
