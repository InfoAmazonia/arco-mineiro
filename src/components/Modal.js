import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0,0,0,0.9);
  overflow: auto;
  display: flex;
  align-items: center;
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
    box-shadow: 0 0 5rem rgba(0,0,0,0.75);
    img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
`

class Modal extends Component {
  constructor (props) {
    super(props);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handlePopstate = this.handlePopstate.bind(this);
  }
  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('popstate', this.handlePopstate);
  }
  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('popstate', this.handlePopstate);
  }
  componentWillReceiveProps (nextProps) {
    if(nextProps.location.key !== this.props.location.key) {
      this.props.close();
    }
  }
  handleKeydown (ev) {
    if(ev.keyCode == 27) {
      this.props.close();
    }
  }
  handlePopstate (ev) {
    ev.preventDefault();
    this.props.close();
    history.go(1);
  }
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

export default withRouter(Modal);
