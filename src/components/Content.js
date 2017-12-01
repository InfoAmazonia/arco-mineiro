import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  transition: all .5s ease-in-out;
  font-size: .8em;
  ${media.desktop`
    flex-direction: row;
  `}
  .content {
    flex: 1 1 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
  }
  h1,
  h2,
  h3 {
    line-height: 1.5;
    font-weight: 600;
  }
  h1 {
    font-size: 1.4em;
  }
  h2 {
    font-size: 1.3em;
  }
  h3 {
    font-size: 1.1em;
  }
  p {
    margin: 0 0 1rem;
    strong {
      text-transform: uppercase;
    }
  }
  img {
    display: block;
    margin: 2rem auto;
  }
  article {
    width: 100%;
    position: relative;
  }
  ${media.phablet`
    font-size: 1em;
    .content {
      padding: 1rem 0;
    }
    h1 {
      font-size: 1.8em;
    }
    h2 {
      font-size: 1.6em;
    }
    p {
      margin: 0 0 1.5rem;
    }
  `}
  ${media.tablet`
    .content {
      padding: 6vw 0;
    }
    p {
      margin: 0 0 2rem;
    }
  `}
  ${media.desktopHD`
    font-size: 1.2em;
    .content {
      padding: 6vw 0;
    }
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.8em;
    }
  `}
`
