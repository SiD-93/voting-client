import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import App from './components/App';
import { VotingContainer} from './components/Voting';
import { ResultsContainer } from './components/Results';
import reducer from './reducer';
import { setState } from './action_creators';

const store = createStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Memento', 'Following'],
      tally: {Memento: 2}
    }
  }
});

const socket = io(`${location.protocol}//${location.hostname}:8090`);

socket.on('state', state => 
  store.dispatch(setState(state))
);

const routes = <Route component={App}>
  <Route path='/' component={VotingContainer} />
  <Route path='/results' component={ResultsContainer} />
  </Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
