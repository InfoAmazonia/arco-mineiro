import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  flex: 1 1 50%;
  padding: 2rem;
`

class StoryList extends Component {
  render () {
    return (
      <Wrapper>
        <article>
          <h1>Test</h1>
          <p>Lorem ipsum</p>
        </article>
      </Wrapper>
    )
  }
}

export default StoryList;
