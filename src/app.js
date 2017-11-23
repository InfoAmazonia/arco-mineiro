import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import { withRouter, Redirect, Route, Link, Switch } from 'react-router-dom';

import Landing from 'scenes/Landing';
import Story from 'scenes/Story';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/global.css';

class Application extends Component {
  constructor (props) {
    super(props);
    this.state = {
      initialized: false
    };
  }
  componentWillReceiveProps (nextProps) {
    const path = nextProps.lastPath;
    // console.log(nextProps.lastPath);
    if(path !== '/' && !this.lastPath && nextProps.rehydrated) {
      this.lastPath = this.props.lastPath;
      this.setState({
        initialized: true
      });
      console.log(this.lastPath);
    }
  }
  render () {
    const { initialized } = this.state;
    const { location, match, rehydrated } = this.props;
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
        {(!initialized && this.lastPath && rehydrated) && (
          <Redirect to={this.lastPath} />
        )}
      </TransitionGroup>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rehydrated: state._persist.rehydrated,
    lastPath: state.router.location ? state.router.location.pathname : ''
  }
};

export default withRouter(connect(mapStateToProps)(Application));
