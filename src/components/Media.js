import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import Video from './Video';
import Map from './Map';

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 90px;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  transition: all .2s ease-in-out;
  ${media.desktop`
    flex: 0 0 45%;
    max-width: 1000px;
    height: auto;
    border-left: 1px solid #ddd;
    box-shadow: .1rem -.1rem 1rem rgba(0,0,0,0.05);
  `}
  ${media.desktopHD`
    flex: 0 0 40%;
  `}
  .leaflet-container {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: inherit;
    overflow: hidden;
  }
  ${props => props.active && css`
    height: 300px;
  `}
  ${props => props.expanded && css`
    ${media.desktop`
      flex: 0 0 65%;
    `}
    ${media.desktopHD`
      flex: 0 0 60%;
    `}
  `}
`;

class Media extends Component {
  static propTypes = {
    media: PropTypes.object
  }
  static defaultProps = {
    media: {}
  }
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      active: false
    }
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }
  componentDidMount () {
    this.node = findDOMNode(this);
    window.addEventListener('touchstart', this.handleTouchStart);
  }
  componentWillUnmount() {
    window.removeEventListener('touchstart', this.handleTouchStart);
  }
  handleTouchStart (ev) {
    if(ev.target !== this.node && !this.node.contains(ev.target)) {
      if(this.state.active) {
        this.setState({ active: false });
      }
    } else if(!this.state.active) {
      ev.preventDefault();
      this.setState({ active: true });
    }
  }
  render () {
    const { active } = this.state;
    const { media, children } = this.props;
    if(media.type == 'video') {
      return (
        <Wrapper active={active} expanded={media.expanded}>
          <Video data={media.data} />
        </Wrapper>
      )
    } else if(media.type == 'map') {
      return (
        <Wrapper active={active} expanded={media.expanded}>
          <Map {...media.data} />
        </Wrapper>
      );
    } else {
      return (
        <Wrapper active={active} expanded={media.expanded}>
          {children}
        </Wrapper>
      );
    }
  }
}

export default Media;
