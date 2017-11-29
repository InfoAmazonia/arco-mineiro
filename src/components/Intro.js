import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContext } from 'actions/context';
import { media } from 'styles/utils';


const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center;
  justify-content: center; */}
  flex-direction: column;
  flex: 0 0 auto;
  color: #fff;
  padding: 1rem;
  transition: all .5s ease-in-out;
  position: relative;
  background-color: #111;
  box-sizing: border-box;
  ${media.tablet`
    padding: 2rem 15vw;
  `}
  ${media.desktop`
    padding: 2rem 10vw;
  `}
  ${props => props.active && css`
    flex: 0 0 auto;
    .intro-title {
      font-size: 7vw;
    }
    .intro-bg {
      opacity: 1;
    }
  `}
`;

const Margin = styled.div`
  content: 'a';
  flex: 1 1 auto;
`;

const Title = styled.h2`
  flex: 0 0 auto;
  line-height: 1;
  font-size: 1em;
  margin: 0 0 1rem;
  text-shadow: 0 0 2vw rgba(0,0,0,1);
  transition: all .5s ease-in-out;
  position: relative;
  z-index: 2;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  opacity: .2;
  transition: all .5s ease-in-out;
  background-color: #111;
  background-size: cover;
  background-position: center;
  background-image: url('http://9639-presscdn-0-85.pagely.netdna-cdn.com/wp-content/uploads/2016/02/Stop-Panic-Selling-Gold-Mining-Stocks-622x415.jpg');
  ${'' /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/8d/Kalgoorlie_The_Big_Pit_DSC04498.JPG'); */}
`;

const Scroll = styled.span`
  font-size: 6vw;
  text-shadow: 0 0 2vw rgba(0,0,0,1);
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  margin: 0;
  ${media.tablet`
    margin: 0 2rem;
  `}
`

class Intro extends Component {
  constructor(props) {
    super(props);
    this._go = this._go.bind(this);
  }
  _go () {
    const { location, updateContext } = this.props;
    let scrollState = {};
    scrollState[location.pathname] = 1;
    updateContext('storyScroll', scrollState);
  }
  render () {
    const { active } = this.props;
    return (
      <Wrapper {...this.props}>
        <Background className="intro-bg" />
        <Margin>&nbsp;</Margin>
        <Title className="intro-title" {...this.props}>{this.props.title}</Title>
        {active && (
          <Scroll className="fa fa-chevron-down" onClick={this._go} />
        )}
      </Wrapper>
    )
  }
};

const mapDispatchToProps = {
  updateContext
};

export default withRouter(connect(null, mapDispatchToProps)(Intro));
