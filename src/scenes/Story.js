import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Content from 'components/Content';
import Bottom from 'components/Bottom';
import Map from 'components/Map';
import Tools from 'components/Tools';
import Story from 'components/Story';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

class Scene extends Component {
  render () {
    return (
      <Wrapper className="scene story">
        <Header />
        <Content>
          <Story />
          <Tools />
          <Map />
        </Content>
      </Wrapper>
    )
  }
}

export default Scene;
