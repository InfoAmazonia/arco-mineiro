import React, { Component } from 'react';
import styled from 'styled-components';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Redirect, Route, Link, Switch } from 'react-router-dom';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';
import Bottom from 'components/Bottom';
import Media from 'components/Media';
import Video from 'components/Video';
import Map from 'components/Map';
import Tools from 'components/Tools';
import Story from 'components/Story';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  .articles-transition-enter {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    position: absolute;
  }
  .articles-transition-enter.articles-transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 800ms ease-in-out;
  }
  .articles-transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .articles-transition-exit.articles-transition-exit-active {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    transition: all 100ms ease-in-out;
    position: absolute;
  }
`;

const TransitionComp = styled.div`
  position: relative;
`;

class Scene extends Component {
  render () {
    const { location, match } = this.props;
    return (
      <Wrapper className="scene story">
        <Header />
        <ArticleNav />
        <Content>
          <Story>
            <TransitionGroup
              component={TransitionComp}
              >
              <CSSTransition
                key={location.key}
                classNames="articles-transition"
                timeout={800}
              >
                <Switch location={location}>
                  <Route path={`${match.url}/gold-mining`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: require('story.md')}} />
                  )} />
                  <Route path={`${match.url}/grip-of-the-guerrilla`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: require('story.md')}} />
                  )} />
                  <Route path={`${match.url}/coltan-country`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: require('story.md')}} />
                  )} />
                  <Route path={`${match.url}/malaria`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: require('story.md')}} />
                  )} />
                  <Route path={`${match.url}/gambling`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: require('story.md')}} />
                  )} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Story>
          {/* <Tools /> */}
          <Media>
            {/* <Map /> */}
            <Video />
          </Media>
        </Content>
      </Wrapper>
    )
  }
}

export default Scene;
