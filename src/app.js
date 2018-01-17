import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { withRouter, Route, Link, Switch } from "react-router-dom";

import Head from "components/Head";

import Page from "components/Page";
import Title from "components/blocks/Title";
import Landing from "scenes/Landing";
import Story from "scenes/Story";
import About from "scenes/About";
import Share from "scenes/Share";

import "normalize.css";
import "font-awesome/css/font-awesome.css";
import "styles/global.css";

window.prerenderReady = false;

class Application extends Component {
  componentDidMount() {
    setTimeout(function() {
      window.prerenderReady = true;
    }, 500);
  }
  componentDidUpdate() {
    setTimeout(function() {
      window.prerenderReady = true;
    }, 500);
  }
  render() {
    const { location, match } = this.props;
    let key = 0;
    if (/^\/(en|pt|es)?\/?$/g.test(location.pathname)) {
      key = 1;
    }
    return (
      <div>
        <Head />
        <TransitionGroup>
          <CSSTransition key={key} classNames="route-transition" timeout={800}>
            <Switch location={location}>
              <Route exact path={`${match.url}/`} component={Landing} />
              <Route exact path={`${match.url}/about`} component={About} />
              <Route exact path={`${match.url}/share`} component={Share} />
              <Route path={`${match.url}/story`} component={Story} />
              <Route
                render={() => (
                  <Page>
                    <Helmet>
                      <meta name="prerender-status-code" content="404" />
                    </Helmet>
                    <Title>404 Not Found</Title>
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Application);
