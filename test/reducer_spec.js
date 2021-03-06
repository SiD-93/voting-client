import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Following', 'Memento'),
          tally: Map({Following: 1})
        })
      })
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Following', 'Memento'],
        tally: {Following: 1}
      }
    }));
  });

  it('handles SET_STATE with plain JS', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Following', 'Memento'],
          tally: {Following: 1}
        }
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Following', 'Memento'],
        tally: {Following: 1}
      }
    }));
  });

  it('handles SET_STATE without an initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Following', 'Memento'],
          tally: {Following: 1}
        }
      }
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Following', 'Memento'],
        tally: {Following: 1}
      }
    }));
  });

  it('handles VOTE by setting hasVoted', () => {
    const state = fromJS({
      vote: {
        pair: ['Dunkirk', 'Interstellar'],
        tally: {Dunkirk: 1}
      }
    });
    const action = {type: 'VOTE', entry: 'Dunkirk'};

    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Dunkirk', 'Interstellar'],
        tally: {Dunkirk: 1}
      },
      hasVoted: 'Dunkirk'
    }));
  });

  it('does not set hasVoted for an invalid entry', () => {
    const state = fromJS({
      vote: {
        pair: ['Dunkirk', 'Interstellar'],
        tally: {Dunkirk: 1}
      }
    });
    const action = {type: 'VOTE', entry: 'La La Land'};

    const nextState = reducer(state, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Dunkirk', 'Interstellar'],
        tally: {Dunkirk: 1}
      }
    }));
  });

  it('removes hasVoted on SET_STATE if pair changes', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Dunkirk', 'Interstellar'],
        tally: {Dunkirk: 1}
      },
      hasVoted: 'Dunkirk'
    });
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Memento', 'Following']
        }
      }
    }

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Memento', 'Following']
      }
    }));
  })
});