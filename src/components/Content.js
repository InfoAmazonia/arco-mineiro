import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

export default styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  ${media.desktop`
    flex-direction: row-reverse;
  `}
`
