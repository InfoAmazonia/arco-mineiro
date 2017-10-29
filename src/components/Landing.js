import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from 'styles/utils';

import SiteTitle from './SiteTitle';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  border: 3vw solid #333;
  box-sizing: border-box;
`

const Top = styled.div`
  flex: 1 1 auto;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    ${media.phablet`
      font-size: 1.4em;
    `}
    ${media.tablet`
      font-size: 1.8em;
    `}
    ${media.desktopHD`
      font-size: 2.2em;
    `}
  }
  h2 {
    white-space:nowrap;
    color: #999;
    font-size: .8em;
    font-style: italic;
    border-top: 1px solid #ddd;
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
  width: 80%;
  max-width: 1000px;
  h3 {
    color: #999;
    margin: 0;
    font-size: .6em;
    text-align: center;
    font-style: italic;
    ${media.tablet`
      font-size: .8em;
    `}
  }
  .description {
    text-align: center;
    font-size: 1.2em;
    ${media.phablet`
      font-size: 1.6em;
    `}
    ${media.tablet`
      font-size: 2em;
    `}
  }
`

const Bottom = styled.div`
  flex: 0 0 auto;
`

const Start = styled.a`
  background: #333;
  color: #fff;
  text-decoration: none;
  padding: .75rem 4rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
`

class Landing extends Component {
  render () {
    return (
      <Wrapper>
        <Top>
          <SiteTitle />
          <h2>by Bram Ebus</h2>
          <Middle>
            <p className="description">
              The destruction of 44 thousand square miles of forests in the largest mining project in Venezuela
            </p>
            <h3>Developed by <strong>Miguel Peixe</strong>, edited by <strong>Stefano Wrobleski</strong> and advisory by <strong>Oscar Murillo</strong></h3>
          </Middle>
        </Top>
        <Bottom>
          <Start>
            Explore
          </Start>
        </Bottom>
      </Wrapper>
    )
  }
}

export default Landing;
