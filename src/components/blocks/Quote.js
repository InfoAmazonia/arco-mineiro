import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

const Wrapper = styled.div`
  padding: 1rem;
  display: block;
  color: #999;
  font-style: italic;
  text-align: right;
  margin: 3vw 0;
  font-size: 1.2em;
  ${media.phablet`
    padding: 0 5vw 0 10vw;
  `}
  blockquote {
    position: relative;
    max-width: 450px;
    float: right;
    margin: 0;
    .fa {
      position: absolute;
      color: #f0f0f0;
      left: -.5em;
      top: -.5em;
      font-size: 2em;
    }
    cite {
      color: #333;
    }
  }
`

export default ({ children, author }) => (
  <Wrapper>
    <blockquote>
      <span className="fa fa-quote-left" />
      {children}
      {author ? (
        <footer>
          <cite>— {author}</cite>
        </footer>
      ) : null}
    </blockquote>
    <div className="clear" />
  </Wrapper>
)
