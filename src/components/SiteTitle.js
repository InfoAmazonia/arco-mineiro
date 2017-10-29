import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: 1em;
  line-height: 1;
  ${media.desktop`
    font-size: 1.4em;
  `}
  img {
    height: 3em;
    margin-right: 1rem;
    float: left;
    ${media.tablet`
      margin-right: 2vw;
    `}
  }
  .title-text {
    float: left;
  }
  .title-item {
    display: inline-block;
    padding-right: .25rem;
    font-size: .8em;
    white-space: nowrap;
    &.title-1,
    &.title-2 {
      color: #999;
    }
    &.title-1 {
      padding-left: .75rem;
    }
    &.title-2 {
      font-size: .5em;
    }
    &.title-3 {
      display: block;
      letter-spacing: -.1rem;
      font-size: 1.6em;
      font-weight: 700;
      padding: 0;
    }
  }
`

class SiteTitle extends Component {
  render () {
    return (
      <div className="clearfix">
        <Title>
          <img src={require('images/logo_1.svg')} alt="Digging in to the Mining Arc" />
          <span className="title-text">
            <span className="title-item title-1">Digging</span>
            <span className="title-item title-2">into the</span>
            <span className="title-item title-3">Mining Arc</span>
          </span>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
