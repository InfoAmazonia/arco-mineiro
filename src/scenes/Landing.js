import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { resetContext } from 'actions/context';
import { media, color } from 'styles/utils';

import SiteTitle from 'components/SiteTitle';

import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000;
  box-sizing: border-box;
  text-shadow: 0 0 2px #000;
  color: #fff;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(${require('images/gold_.jpg')});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  &.route-transition-enter {
    opacity: 1;
    background-color: transparent;
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
    }
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
    }
    &:before,
    h2,
    a {
      opacity: 0;
    }
  }
  &.route-transition-enter.route-transition-enter-active {
    opacity: 1;
    transition: all 250ms ease-in;
    z-index: 9999;
    background-color: #000;
    &:before,
    .site-title,
    .middle,
    h2,
    a {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 250ms ease-in;
    }
  }
  &.route-transition-exit {
    opacity: 1;
    background-color: #000;
    &:before,
    .site-title,
    .middle,
    h2,
    a {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  &.route-transition-exit.route-transition-exit-active {
    opacity: 1;
    transition: all 800ms ease-in;
    background-color: transparent;
    .site-title {
      opacity: 0;
      transform: translate(0, -15px);
      transition: all 250ms ease-in;
    }
    .middle {
      opacity: 0;
      transform: translate(0, 15px);
      transition: all 250ms ease-in;
    }
    &:before,
    h2,
    a {
      opacity: 0;
      transition: all 250ms ease-in;
    }
  }
`

const Top = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.1em;
    color: #fff;
    .logo {
      margin-left: -1rem;
    }
    ${media.tablet`
      font-size: 1.4em;
    `}
    ${media.desktopHD`
      font-size: 1.6em;
    `}
  }
  h2 {
    white-space:nowrap;
    color: #fff;
    font-size: .8em;
    font-style: italic;
    font-weight: normal;
    border-top: 1px solid #fff;
    margin: 2rem 0;
    padding: .5rem 2rem;
    ${media.tablet`
      font-size: 1em;
    `}
    ${media.desktopHD`
      margin: 3rem 0;
    `}
  }
`

const Middle = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  color: #fff;
  padding: 0;
  box-sizing: border-box;
  width: 95%;
  text-align: center;
  font-size: .8em;
  font-family: "Playfair Display";
  ${media.phablet`
    width: 65%;
    padding: 0 3rem;
    font-size: 1em;
  `}
  ${media.tablet`
    font-size: 1.2em;
  `}
  .description {
    text-align: center;
    margin: 0 0 2rem;
    font-size: 1em;
    ${media.desktopHD`
      font-size: 1.2em;
    `}
  }
  a {
    font-family: "Cinzel";
    font-size: .5em;
    letter-spacing: .1rem;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    margin: -1px -1px 0 0;
    padding: .75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`

class Scene extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { lastPath } = this.props;
    const { resetContext } = this.props;
    return (
      <Wrapper className="scene landing">
        <Top>
          <SiteTitle />
          <h2>
            <FormattedMessage
              id="general.author"
              defaultMessage="by Bram Ebus" />
          </h2>
        </Top>
        <Middle className="middle">
          <p className="description">
            <FormattedMessage
              id="general.tagline"
              defaultMessage="The destruction of 44 thousand square miles of forests in the largest mining project in Venezuela" />
          </p>
          {lastPath ? (
            <div>
              <Link to="/story" onClick={resetContext}>
                <FormattedMessage
                  id="general.startOver"
                  defaultMessage="Start Over" />
              </Link>
              <Link to={lastPath}>
                <FormattedMessage
                  id="general.continueReading"
                  defaultMessage="Continue Reading" />
              </Link>
            </div>
          ) : (
            <Link to="/story">
              <FormattedMessage
                id="general.readStory"
                defaultMessage="Read the Story" />
            </Link>
          )}
          {/* <h3>Developed by <strong>Miguel Peixe</strong>, edited by <strong>Stefano Wrobleski</strong> and advisory by <strong>Oscar Murillo</strong></h3> */}
        </Middle>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  }
};

const mapDispatchToProps = {
  resetContext
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
