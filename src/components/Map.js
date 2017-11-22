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

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [6.4, -66.6],
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
    const { center, zoom } = this.state;
    return (
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
    );
  }
}

export default MainMap;
