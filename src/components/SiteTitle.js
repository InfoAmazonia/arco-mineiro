import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

const logos = [
  require('images/logo_1.svg'),
  require('images/logo_1_dark.svg'),
  require('images/logo_2.svg'),
  require('images/logo_3.svg')
];

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: .8em;
  line-height: 1;
  font-family: "Cinzel";
  color: #111;
  .logo {
    ${'' /* background: #fff; */}
    border-radius: 100%;
    float: left;
    margin-right: -.5em;
    width: 1.65em;
    margin-top: -.1em;
    ${'' /* border: 3px solid ${color}; */}
    ${'' /* border: 1px solid #333; */}
  }
  ${props => props.logo ==  "2" && css`
    .logo {
      width: 11em;
      margin-top: -4em;
      margin-left: -4em;
    }
  `}
  a {
    color: inherit;
    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }
  }
  ${media.desktop`
    font-size: 1.4em;
  `}
  img {
    width: 100%;
    height: auto;
    ${media.tablet`
      margin-right: 2vw;
    `}
  }
  .title-text {
    float: left;
  }
  .title-item {
    display: inline-block;
    padding-right: .25em;
    font-size: .8em;
    white-space: nowrap;
    &.title-2 {
    }
    &.title-1 {
      font-size: .75em;
      padding-left: .75em;
    }
    &.title-2 {
      font-size: .5em;
    }
    &.title-3 {
      display: block;
      letter-spacing: -.03em;
      font-size: 1.6em;
      font-weight: 700;
      padding: 0;
    }
  }
`

class SiteTitle extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <div className="site-title clearfix">
        <Title {...props}>
          <Link to="/">
            <span className="logo">
              <img src={logos[logoIndex]} alt="Digging in to the Mining Arc" />
            </span>
            <span className="title-text">
              <span className="title-item title-1">Digging</span>
              <span className="title-item title-2">into the</span>
              <span className="title-item title-3">Mining Arc</span>
            </span>
          </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
