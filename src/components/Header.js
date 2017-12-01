import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

import SiteTitle from './SiteTitle';

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: 1rem;
  font-size: .8em;
  background: #f3f3f3;
  .header-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
  ${media.phablet`
    padding: 1rem;
    font-size: 1em;
  `}
  ${media.desktopHD`
    padding: 2vw 10vw;
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
      color: #999;
      margin-left: 1.2rem;
      ${media.phablet`
        margin-left: 2rem;
      `}
      ${media.desktop`
        margin-left: 1rem;
        background: #fff;
        width: 2em;
        height: 2em;
        padding: .5em;
        border-radius: 100%;
        line-height: 2em;
        text-align: center;
        font-size: .8em;
      `}
      position: relative;
      &:hover {
        color: #111;
      }
      .icon-info {
        background: red;
        color: white;
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
        font-weight: 800;
      }
    }
  }
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <div className="header-content">
          <SiteTitle />
          <nav>
            <Link to="/about" title="Data">
              <span className="fa fa-database"></span>
            </Link>
            <Link to="/about" title="Learn more">
              <span className="fa fa-info"></span>
            </Link>
            <Link to="/about" title="Share">
              <span className="fa fa-share-alt"></span>
            </Link>
          </nav>
        </div>
      </Wrapper>
    )
  }
}

export default Header;
