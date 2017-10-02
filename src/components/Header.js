import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  margin: 4rem auto;
  width: 50%;
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <h1><img src={require('images/logo.svg')} alt="Arco Minero" /></h1>
      </Wrapper>
    )
  }
}

export default Header;
