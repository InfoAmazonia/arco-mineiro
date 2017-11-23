import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { withRouter, Route, Link, Switch } from 'react-router-dom';

import Landing from 'scenes/Landing';
import Story from 'scenes/Story';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/global.css';

class Application extends Component {
  render () {
    const { location, match } = this.props;
    const key = "/" + location.pathname.split('/')[1];
    return (
      <TransitionGroup>
        <CSSTransition
          key={key}
          classNames="route-transition"
          timeout={800}
        >
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route path="/story" component={Story} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(Application);
