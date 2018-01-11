import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Redirect, Route, Link, Switch } from "react-router-dom";

import { expandMedia } from "actions/media";

import swipe from "utils/swipe";

import Page from "components/Page";

import Media from "components/Media";
import Story from "components/Story";
import Modal from "components/Modal";

import Introduction from "./articles/Introduction";
import GoldMining from "./articles/GoldMining";
import GripOfTheGuerrilla from "./articles/GripOfTheGuerrilla";
import ColtanCountry from "./articles/ColtanCountry";
import Malaria from "./articles/Malaria";
import Gambling from "./articles/Gambling";

const articles = [
  "/story",
  "/story/gold-mining",
  "/story/grip-of-the-guerrilla",
  "/story/coltan-country",
  "/story/malaria",
  "/story/gambling"
];

class Scene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.unexpand = this.unexpand.bind(this);
  }
  componentDidMount() {
    this.removeSwipeListeners = swipe(findDOMNode(this), direction => {
      const { location } = this.props;
      const idx = articles.findIndex(article => {
        return location.pathname == article;
      });
      if (direction == "left" && idx < articles.length - 1) {
        this.setState({
          redirect: articles[idx + 1]
        });
      } else if (direction == "right" && idx > 0) {
        this.setState({
          redirect: articles[idx - 1]
        });
      }
    });
    twttr.widgets.load();
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (
      !prevProps.location.pathname ||
      location.pathname !== prevProps.location.pathname
    ) {
      twttr.widgets.load();
    }
  }
  componentWillUnmount() {
    if (this.removeSwipeListeners) {
      this.removeSwipeListeners();
      this.removeSwipeListeners = undefined;
    }
  }
  unexpand() {
    this.props.expandMedia(false);
  }
  render() {
    const { redirect } = this.state;
    const { location, match, media } = this.props;
    const go = `${redirect}`;
    const story = require("story.md");
    return (
      <Page>
        <Story className="content">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="pages-transition"
              timeout={600}
            >
              <Switch location={location}>
                <Route exact path={`${match.url}`} component={Introduction} />
                <Route
                  path={`${match.url}/gold-mining`}
                  component={GoldMining}
                />
                <Route
                  path={`${match.url}/grip-of-the-guerrilla`}
                  component={GripOfTheGuerrilla}
                />
                <Route
                  path={`${match.url}/coltan-country`}
                  component={ColtanCountry}
                />
                <Route path={`${match.url}/malaria`} component={Malaria} />
                <Route path={`${match.url}/gambling`} component={Gambling} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          {redirect && go !== location.pathname && <Redirect to={go} />}
        </Story>
        <Media media={media} preview={true} />
        {media.expanded && (
          <Modal close={this.unexpand}>
            <Media media={media} />
          </Modal>
        )}
      </Page>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    media: state.media
  };
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
