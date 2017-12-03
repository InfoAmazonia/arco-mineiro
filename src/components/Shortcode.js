import React, { Component } from 'react';

export default class Shortcode extends Component {
  constructor (props) {
    super(props);
    console.log(props);
  }
  render () {
    return <p>{this.props.children}</p>;
  }
}
