import React from 'react';

import Winner from './Winner';
import { connect } from 'react-redux'; 
import * as actionCreators from '../action_creators';

export const Results = (props) => {
  const getPair = () => {
    return props.pair || [];
  }

  const getVotes = (entry) => {
    if (props.tally && props.tally.has(entry)) {
      return props.tally.get(entry);
    }
    return 0;
  }
  return (
    props.winner ?
    <Winner winner={props.winner} /> :
    <div className='results'>
      <div className='tally'>
        {getPair().map(entry =>
          <div key={entry} className='entry'>
            <h1>{entry}</h1>
            <div className='voteCount'>
              {getVotes(entry)}
            </div>
          </div>
        )}
      </div>
      <div className='management'>
        <button className='next' onClick={props.next}>
          Next
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results);