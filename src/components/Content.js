import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export default styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  transition: all .5s ease-in-out;
  ${media.desktop`
    flex-direction: row;
  `}
`
