import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0,0,0,0.75);
  .close-overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .modal-content {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 10%;
  }
`

class Modal extends Component {
  render () {
    const { close } = this.props;
    return (
      <Wrapper>
        <div className="modal-content">
          {this.props.children}
        </div>
        <a className="close-overlay" onClick={close} href="javascript:void(0)"></a>
      </Wrapper>
    )
  }
}

export default Modal;
