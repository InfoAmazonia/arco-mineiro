import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { expandMedia } from 'actions/media';
import { media } from 'styles/utils';

import Video from './Video';
import Map from './Map';

const Wrapper = styled.div`
  flex: 0 0 auto;
  height: 90px;
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  transition: all .2s ease-in-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &.clickable {
    cursor: pointer;
  }
  ${media.desktop`
    flex: 0 0 45%;
    max-width: 1000px;
    height: auto;
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
  static propTypes = {
    media: PropTypes.object
  }
  static defaultProps = {
    media: {}
  }
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this);
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
  handleClick (ev) {
    ev.preventDefault();
    this.props.expandMedia(true);
  }
  render () {
    const { active } = this.state;
    const { media, preview, children } = this.props;
    switch(media.type) {
      case 'video' : {
        return (
          <Wrapper>
            <Video data={media.data} preview={preview || false} />
          </Wrapper>
        )
      }
      case 'map' : {
        return (
          <Wrapper active={active}>
            <Map {...media.data} />
          </Wrapper>
        );
      }
      case 'image' :  {
        if(preview) {
          return (
            <Wrapper className="clickable" onClick={this.handleClick} style={{
              'background-image': `url(${media.data.src})`
            }} />
          );
        } else {
          return (
            <Wrapper>
              <img src={media.data.src} />
            </Wrapper>
          );
        }
      }
      default : {
        return (
          <Wrapper active={active}>
            {children}
          </Wrapper>
        )
      }
    }
  }
}

const mapDispatchToProps = {
  expandMedia
};

export default connect(null, mapDispatchToProps)(Media);
