import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { paddings } from './utils';

const styles = css`
  border-bottom: 1px solid #ddd;
  margin: 4vw 0;
  padding: 2vw 1rem;
  span {
    display: block;
    max-width: 900px;
  }
  ${media.phablet`
    padding-left: 8vw;
    padding-right: 8vw;
  `}
  ${media.desktop`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
  ${media.desktopHD`
    padding-left: 8vw;
    padding-right: 8vw;
  `}
`

export default ({ as, children }) => {
  const Wrapper = styled[as]([styles]);
  return (
    <Wrapper as={as}>
      <span>{children}</span>
    </Wrapper>
  )
}
