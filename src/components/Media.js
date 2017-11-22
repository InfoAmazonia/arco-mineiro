import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 90px;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  transition: height .2s ease-in-out;
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
`;

class Media extends Component {
  constructor(props) {
    super(props);
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
    const { children } = this.props;
    return (
      <Wrapper active={active}>
        {children}
      </Wrapper>
    );
  }
}

export default Media;
