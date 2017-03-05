import React, { Component } from 'react';
import { connect } from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

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
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
  )(Voting);
