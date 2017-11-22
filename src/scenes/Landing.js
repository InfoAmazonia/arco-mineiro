import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';

import SiteTitle from 'components/SiteTitle';

import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: fixed;
  z-index: 9999;
  ${'' /* background: #fff; */}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  border: 0 solid ${color};
  box-sizing: border-box;
  text-shadow: 0 0 2px #000;
  color: #fff;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(${require('images/gold.jpg')});
    background-size: cover;
    background-position: top center;
    z-index: -1;
  }
  &.route-transition-enter {
    opacity: 1;
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
    }
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
    }
    &:before,
    h2,
    a {
      opacity: 0;
    }
  }
  &.route-transition-enter.route-transition-enter-active {
    opacity: 1;
    transition: all 250ms ease-in;
    z-index: 9999;
    &:before,
    .site-title,
    .middle,
    h2,
    a {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 250ms ease-in;
    }
  }
  &.route-transition-exit {
    opacity: 1;
    &:before,
    .site-title,
    .middle,
    h2,
    a {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  &.route-transition-exit.route-transition-exit-active {
    opacity: 1;
    transition: all 800ms ease-in;
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
      transition: all 250ms ease-in;
    }
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
      transition: all 250ms ease-in;
    }
    &:before,
    h2,
    a {
      opacity: 0;
      transition: all 250ms ease-in;
    }
  }
`

const Top = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.1em;
    color: #fff;
    .logo {
      margin-left: -1rem;
    }
    ${media.tablet`
      font-size: 1.4em;
    `}
    ${media.desktopHD`
      font-size: 1.6em;
    `}
  }
  h2 {
    white-space:nowrap;
    color: #fff;
    font-size: .8em;
    font-style: italic;
    border-top: 1px solid #fff;
    margin: 2rem 0;
    padding: .5rem 2rem;
    ${media.tablet`
      font-size: 1em;
    `}
    ${media.desktopHD`
      margin: 3rem 0;
    `}
  }
`

const Middle = styled.div`
  max-width: 1000px;
  ${'' /* background: #222; */}
  color: #fff;
  padding: 2rem;
  box-sizing: border-box;
  width: 95%;
  text-align: center;
  font-size: .8em;
  ${media.phablet`
    width: 65%;
    padding: 2rem 3rem;
    font-size: 1em;
  `}
  ${media.tablet`
    font-size: 1.2em;
  `}
  h3 {
    color: #999;
    margin: 0;
    font-size: .6em;
    font-style: italic;
    ${media.tablet`
      font-size: .8em;
    `}
  }
  .description {
    text-align: center;
    margin: 0;
    font-size: 1.2em;
  }
  a {
    font-size: .8em;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    margin: 2rem 0 0;
    padding: .75rem 3rem;
    font-weight: 600;
    ${'' /* background: #111; */}
  }
`

class Scene extends Component {
  render () {
    return (
      <Wrapper className="scene landing">
        <Top>
          <SiteTitle logo="3" />
          <h2>by Bram Ebus</h2>
        </Top>
        <Middle className="middle">
          <p className="description">
            The destruction of 44 thousand square miles of forests in the largest mining project in Venezuela
          </p>
          <Link to="/story/gold-mining">
          Read the Story
        </Link>
        {/* <h3>Developed by <strong>Miguel Peixe</strong>, edited by <strong>Stefano Wrobleski</strong> and advisory by <strong>Oscar Murillo</strong></h3> */}
      </Middle>
      </Wrapper>
    )
  }
}

export default Scene;
