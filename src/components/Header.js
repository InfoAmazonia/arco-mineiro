import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.header`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  font-size: .8em;
  ${media.phablet`
    padding: 1rem 10vw;
    font-size: 1em;
  `}
  ${media.tablet`
    padding: 5vw 15vw;
  `}
  ${media.tablet`
    // padding: 5vw;
  `}
  h1 {
    flex: 1 1 100%;
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
    img {
      height: 1.4em;
      margin-right: 1rem;
      float: left;
      ${media.tablet`
        margin-right: 2.5vw;
      `}
    }
  }
  nav {
    flex: 0 0 auto;
    a {
      color: #444;
      margin: 0 0 0 1.5rem;
      ${media.desktop`
        margin: 0 0 0 3rem;
      `}
      position: relative;
      &:hover {
        color: #111;
      }
      .icon-info {
        background: #fff;
        border: 1px solid #444;
        position: absolute;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        top: -.5rem;
        right: -.5rem;
        display: inline-block;
        text-decoration: none;
        font-size: .5em;
        border-radius: 100%;
        color: #444;
        font-weight: 600;
      }
    }
  }
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        {/* <h1><img src={require('images/logo.svg')} alt="Arco Minero" /></h1> */}
        <h1>
          <img src={require('images/polygons.svg')} />
          Arco Mineiro
        </h1>
        <nav>
          <a href="#" title="Notifications">
            <span className="fa fa-bell-o"></span>
            <span className="icon-info">2</span>
          </a>
          <a href="#" title="Share">
            <span className="fa fa-share-alt"></span>
          </a>
          <a href="#" title="Learn more">
            <span className="fa fa-info-circle"></span>
          </a>
        </nav>
      </Wrapper>
    )
  }
}

export default Header;
