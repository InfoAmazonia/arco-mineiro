import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { paddings } from './utils';

const styles = css`
  border-bottom: 1px solid #ddd;
  margin: 4vw 0;
  padding: 2vw 1rem;
  ${media.phablet`
    padding-left: 6vw;
    padding-right: 6vw;
  `}
  ${media.tablet`
    padding-left: 6vw;
    padding-right: 6vw;
  `}
  ${media.desktop`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
  ${media.desktopHD`
    padding-left: 5vw;
    padding-right: 5vw;
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
