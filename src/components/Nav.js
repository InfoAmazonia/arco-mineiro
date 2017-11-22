import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.nav`
  ${'' /* background: #333; */}
  font-size: .4em;
  ${'' /* margin-bottom: 1rem; */}
  text-align: center;
  background: #f7f7f7;
  ol {
    display: table;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
      display: table-cell;
      ${'' /* border-left: 1px solid #eee; */}
      line-height: 1;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -.25rem;
        bottom: 0;
        height: .4rem;
        width: .6rem;
        background: transparent;
        border: 1px solid #ddd;
        box-sizing: border-box;
        border-top-left-radius: .6rem;
        border-top-right-radius: .6rem;
      }
      a {
        position: relative;
        z-index: 1;
        display: block;
        color: #999;
        padding: .5rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
        &:hover {
          border-color: #aaa;
          color: #333;
        }
      }
      .progress {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 4px;
        width: 25%;
        background: rgb(95, 249, 92);
      }
      &:hover {
        &:before {
          border-color: #aaa;
        }
      }
      &.active {
        &:before {
          border-color: #aaa;
        }
        a {
          color: #333;
          border-color: #aaa;
        }
      }
    }
  }
  ${media.phablet`
    background: transparent;
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
  ${media.tablet`
    font-size: .6em;
  `}
  ${media.desktop`
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
`

class ArticleNav extends Component {
  render () {
    return (
      <Wrapper>
        <ol>
          <li className="active">
            <a href="#">Gold Mining</a>
            <span className="progress"></span>
          </li>
          <li>
            <a href="#">Grip of the Guerrilla</a>
          </li>
          <li>
            <a href="#">Coltan Country</a>
          </li>
          <li>
            <a href="#">Malaria</a>
          </li>
          <li>
            <a href="#">Gambling</a>
          </li>
        </ol>
      </Wrapper>
    )
  }
}

export default ArticleNav;
