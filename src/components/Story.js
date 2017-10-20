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
    padding: 2rem 10vw;
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
