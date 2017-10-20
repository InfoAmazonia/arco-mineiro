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
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0, 0],
      zoom: 4
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        center: [2,2]
      });
    }, 5000);
  }
  render () {
    const { center, zoom } = this.state;
    return (
      <Wrapper>
        <Map center={center} zoom={zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
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
