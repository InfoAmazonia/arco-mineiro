import React, { Component } from 'react';
import styled from 'styled-components';
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
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  position: relative;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
  ${media.desktop`
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
`;

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [3.5, -73],
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
