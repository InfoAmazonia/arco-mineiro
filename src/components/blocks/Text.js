import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';
import { paddings } from './utils';

const Wrapper = styled.div`
  padding: 1rem;
  ${paddings}
  .text-box-content {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
  }
`
export default ({ children }) => (
  <Wrapper>
    <div className="text-box-content">
      {children}
    </div>
  </Wrapper>
);
