import React, { Component } from 'react';
import styled from 'styled-components';
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
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0 10px 0 0;
  box-shadow: .5rem .5rem 1rem #f7f7f7;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  &:after {
    ${'' /* content: '';
    pointer-events: none;
    z-index: 9999;
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    box-shadow: 0 0 50px 50px #222 inset;
    border-radius: inherit; */}
  }
  .leaflet-container {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: inherit;
    overflow: hidden;
  }
`;

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [4.570868, -74.297333],
      zoom: 6
    }
  }
  componentDidMount () {
    // setTimeout(() => {
    //   this.setState({
    //     center: [2,2]
    //   });
    // }, 5000);
  }
  render () {
    const { center, zoom } = this.state;
    return (
      <Wrapper>
        <Map center={center} zoom={zoom}>
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              <p>Hello World!</p>
            </Popup>
          </Marker>
        </Map>
      </Wrapper>
    );
  }
}

export default MainMap;
