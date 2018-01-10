import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { withRouter, Route, Link, Switch } from 'react-router-dom';

import Landing from 'scenes/Landing';
import Story from 'scenes/Story';
import Data from 'scenes/Data';
import About from 'scenes/About';
import Share from 'scenes/Share';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/global.css';

class Application extends Component {
  render () {
    const { location, match } = this.props;
    let key = 0;
    if(location.pathname == '/') {
      key = 1;
    }
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
            <Route path="/data" component={Data} />
            <Route path="/about" component={About} />
            <Route path="/share" component={Share} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(Application);
