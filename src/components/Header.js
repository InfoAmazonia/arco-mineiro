import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

import SiteTitle from './SiteTitle';

const Wrapper = styled.header`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  font-size: .8em;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 0 5px #eee;
  ${media.phablet`
    padding: 1rem 10vw;
    font-size: 1em;
  `}
  ${media.tablet`
    border-bottom: 0;
    box-shadow: 0 0 0;
    padding: 5vw 15vw;
  `}
  ${media.desktop`
    padding: 4vw 10vw;
  `}
  .site-title {
    flex: 1 1 100%;
  }
  nav {
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    a {
      color: #444;
      margin: 0 0 0 1.2rem;
      ${media.phablet`
        margin: 0 0 0 2rem;
      `}
      ${media.desktop`
        margin: 0 0 0 3rem;
      `}
      position: relative;
      &:hover {
        color: #111;
      }
      .icon-info {
        background: red;
        color: white;
        position: absolute;
        width: 1.1rem;
        height: 1.1rem;
        line-height: 1.1rem;
        text-align: center;
        top: -.5rem;
        right: -.5rem;
        display: inline-block;
        text-decoration: none;
        font-size: .5em;
        border-radius: 100%;
        font-weight: 800;
      }
    }
  }
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <div className="site-title">
          <SiteTitle />
        </div>
        <nav>
          <a href="#" title="Notifications">
            <span className="fa fa-bell-o"></span>
            <span className="icon-info">12</span>
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
