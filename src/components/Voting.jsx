import React, { Component } from 'react';
import { connect } from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

export const Voting = (props) => {
  return(
    <div>
      {
        props.winner ?
        <Winner winner={props.winner} /> :
        <Vote {...props} />
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
