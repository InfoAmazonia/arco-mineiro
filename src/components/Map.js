import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
const imagePath = '/';
L.Icon.Default.imagePath = imagePath;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').split(imagePath)[1],
    iconUrl: require('leaflet/dist/images/marker-icon.png').split(imagePath)[1],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').split(imagePath)[1],
});

const Wrapper = styled.div`
  flex: 1 1 45%;
  height: 90px;
  position: relative;
  box-sizing: border-box;
  transition: height .2s ease-in-out;
  ${media.desktop`
    height: auto;
    border-top: 1px solid #ddd;
    box-shadow: .25rem .25rem 1rem #f0f0f0;
    border-radius: 0 10px 0 0;
    border-right: 1px solid #ddd;
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

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [3.5, -73],
      zoom: 6,
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
        setTimeout(() => {
          this.refs.map.leafletElement.invalidateSize(true);
        }, 210);
      }
    } else if(!this.state.active) {
      ev.preventDefault();
      this.setState({ active: true });
      setTimeout(() => {
        this.refs.map.leafletElement.invalidateSize(true);
      }, 210);
    }
  }
  render () {
    const { center, zoom, active } = this.state;
    return (
      <Wrapper active={active}>
        <Map ref="map" center={center} zoom={zoom}>
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          {/* <Marker position={center}>
            <Popup>
              <p>Hello World!</p>
            </Popup>
          </Marker> */}
        </Map>
      </Wrapper>
    );
  }
}

export default MainMap;
