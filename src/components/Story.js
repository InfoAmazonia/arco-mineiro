import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.section`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 1rem;
  font-size: .8em;
  h1 {
    font-size: 1.4em;
    margin: 0 0 1rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 1.1em;
    font-weight: 600;
  }
  h3 {
    font-size: 1em;
    font-weight: 600;
  }
  img {
    display: block;
    margin: 2rem auto;
  }
  article {
    max-width: 640px;
  }
  ${media.phablet`
    padding: 2rem 10vw;
    font-size: 1em;
    h1 {
      font-size: 1.8em;
      padding-bottom: 2rem;
      margin-bottom: 4rem;
    }
  `}
  ${media.tablet`
    padding: 2rem 15vw;
    h1 {
      border-width: 2px;
      border-color: #000;
      font-size: 2em;
    }
  `}
  ${media.desktop`
    padding: 2rem 10vw 2rem 5vw;
  `}
`

class Story extends Component {
  render () {
    return (
      <Wrapper>
        <article dangerouslySetInnerHTML={{__html: require('story.md')}}>
        </article>
      </Wrapper>
    )
  }
}

export default Story;
