import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Redirect, Route, Link, Switch } from 'react-router-dom';

import swipe from 'utils/swipe';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';
import Bottom from 'components/Bottom';
import Media from 'components/Media';
import Video from 'components/Video';
import Map from 'components/Map';
import Tools from 'components/Tools';
import Story from 'components/Story';

import GoldMining from './articles/GoldMining';

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
    transform: translate(1rem, 0);
    position: absolute;
  }
  .articles-transition-enter.articles-transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 600ms ease-in-out;
  }
  .articles-transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .articles-transition-exit.articles-transition-exit-active {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    transition: all 200ms ease-in-out;
    position: absolute;
  }
`;

const TransitionComp = styled.div`
  position: relative;
`;

const articles = [
  'gold-mining',
  'grip-of-the-guerrilla',
  'coltan-country',
  'malaria',
  'gambling'
];

class Scene extends Component {
  constructor (props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  componentDidMount () {
    this.removeSwipeListeners = swipe(findDOMNode(this), direction => {
      const { location } = this.props;
      const idx = articles.findIndex(article => {
        return location.pathname.indexOf(article) !== -1;
      });
      if(direction == 'left' && idx < articles.length-1) {
        this.setState({
          redirect: articles[idx+1]
        });
      } else if(direction == 'right' && idx > 0) {
        this.setState({
          redirect: articles[idx-1]
        });
      }
    });
  }
  componentWillUnmount () {
    if(this.removeSwipeListeners) {
      this.removeSwipeListeners();
      this.removeSwipeListeners = undefined;
    }
  }
  render () {
    const { redirect } = this.state;
    const { location, match } = this.props;
    const go = `${match.url}/${redirect}`;
    const story = require('story.md');
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
                timeout={600}
              >
                <Switch location={location}>
                  <Route exact path={`${match.url}`} component={GoldMining} />
                  <Route path={`${match.url}/gold-mining`} component={GoldMining} />
                  <Route path={`${match.url}/grip-of-the-guerrilla`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: story}} />
                  )} />
                  <Route path={`${match.url}/coltan-country`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: story}} />
                  )} />
                  <Route path={`${match.url}/malaria`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: story}} />
                  )} />
                  <Route path={`${match.url}/gambling`} render={props => (
                    <article dangerouslySetInnerHTML={{__html: story}} />
                  )} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            {(redirect && go !== location.pathname) &&
              <Redirect to={go} />
            }
          </Story>
          {/* <Tools /> */}
          <Media />
        </Content>
      </Wrapper>
    )
  }
}

export default Scene;
