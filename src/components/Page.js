import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Redirect, Route, Link, Switch } from 'react-router-dom';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  .pages-transition-enter {
    opacity: 0.01;
    transform: translate(1rem, 0);
    position: absolute;
  }
  .pages-transition-enter.pages-transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 600ms ease-in-out;
  }
  .pages-transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .pages-transition-exit.pages-transition-exit-active {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    transition: all 200ms ease-in-out;
    position: absolute;
  }
`;

export default ({ children }) => (
  <Wrapper>
    <Header />
    <ArticleNav />
    <Content>
      {children}
    </Content>
  </Wrapper>
)
