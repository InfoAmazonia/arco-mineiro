import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.section`
  flex: 1 1 120%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2rem 1rem;
  ${media.phablet`
    padding: 2rem 10vw;
  `}
  ${media.tablet`
    padding: 2rem 15vw;
  `}
  ${media.desktop`
    padding: 2rem 10vw 2rem 5vw;
  `}
  h1 {
    margin: 0 0 4rem;
    border-bottom: 2px solid #000;
    padding-bottom: 2rem;
  }
  img {
    display: block;
    margin: 2rem auto;
  }
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
