import React, { Component } from 'react';

import { List, Map } from 'immutable';

const pair = List.of('Following', 'Memento');
const tally = Map({'Following': 5, 'Memento': 4});

export default class App extends Component {
  render() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
}
