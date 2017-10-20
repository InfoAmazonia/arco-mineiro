import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex: 1 1 120%;
  padding: 2rem 12vw;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
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
