import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 50%;
          margin-left: -.25rem;
          bottom: -1px;
          height: .4rem;
          width: .6rem;
          background: transparent;
          border: 1px solid #ddd;
          box-sizing: border-box;
          border-top-left-radius: .6rem;
          border-top-right-radius: .6rem;
        }
        &:hover {
          border-color: #aaa;
          color: #333;
          &:before {
            border-color: #aaa;
          }
        }
        &.active {
          color: #333;
          border-color: #aaa;
          &:before {
            border-color: #aaa;
          }
        }
      }
      .progress {
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background: rgb(95, 249, 92);
        transition: width .2s linear;
        z-index: 2;
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

const mapStateToProps = (state, ownProps) => {
  return {
    scrolls: state.context.storyScroll,
    heights: state.context.storyHeight
  }
}

const ProgressBar = connect(mapStateToProps)(({ ...props }) => {
  const { scrolls, heights, path } = props;
  if(path) {
    let progress = 0;
    if(scrolls[path] && heights[path]) {
      console.log(scrolls[path])
      console.log(heights[path])
      progress = scrolls[path]/heights[path]*100;
    }
    console.log(progress);
    return (
      <span className="progress" style={{
        width: progress + '%'
      }} />
    )
  } else {
    return null;
  }
})

class ArticleNav extends Component {
  render () {
    return (
      <Wrapper>
        <ol>
          <li>
            <NavLink to="/story/gold-mining">Gold Mining</NavLink>
            <ProgressBar path="/story/gold-mining" />
          </li>
          <li>
            <NavLink to="/story/grip-of-the-guerrilla">Grip of the Guerrilla</NavLink>
            <ProgressBar path="/story/grip-of-the-guerrilla" />
          </li>
          <li>
            <NavLink to="/story/coltan-country">Coltan Country</NavLink>
            <ProgressBar path="/story/coltan-country" />
          </li>
          <li>
            <NavLink to="/story/malaria">Malaria</NavLink>
            <ProgressBar path="/story/malaria" />
          </li>
          <li>
            <NavLink to="/story/gambling">Gambling</NavLink>
            <ProgressBar path="/story/gambling" />
          </li>
        </ol>
      </Wrapper>
    )
  }
}

export default ArticleNav;
