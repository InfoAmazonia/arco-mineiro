import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { expandMedia } from 'actions/media';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translateX(-50%) translateY(-50%);
    width: auto;
    height: auto;
  }
  .play {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: rgba(0,0,0,0.65);
    color: #fff;
    font-size: 3em;
    text-align: center;
    transition: all .4s ease-in-out;
    opacity: 0;
    .fa {
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -1.5rem;
      margin-left: -1.5rem;
    }
  }
  &:hover {
    .play {
      opacity: 1;
    }
  }
`

class Video extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps (nextProps) {
  }
  handleClick (ev) {
    if(!this.props.expanded) {
      this.props.expandMedia(true);
    }
  }
  render () {
    const { data, expanded } = this.props;
    return (
      <Wrapper onClick={this.handleClick} expanded>
        <video autoPlay loop={!expanded} muted={!expanded} controls={expanded} src={data.sources[0]} />
        {!expanded ? (
          <a href="javascript:void(0);" className="play">
            <span className="fa fa-volume-up"></span>
          </a>
        ) : null}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.media.expanded
  }
};

const mapDispatchToProps = {
  expandMedia
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
