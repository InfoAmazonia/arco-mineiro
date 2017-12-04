import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';
import { margins } from './utils';

const Wrapper = styled.p`
  ${margins}
  ${media.desktop`
    margin-bottom: 1.5rem;
  `}
  ${media.desktopHD`
    margin-bottom: 2rem;
  `}
  .paragraph-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `}
  }
`
export default ({ children }) => (
  <Wrapper>
    <span className="paragraph-content">
      {children}
    </span>
  </Wrapper>
);
