import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: 5vh;
  h1 {
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
  }
  img {
    width: 100px;
  }
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        {/* <h1><img src={require('images/logo.svg')} alt="Arco Minero" /></h1> */}
        <h1>Arco Minero</h1>
      </Wrapper>
    )
  }
}

export default Header;
