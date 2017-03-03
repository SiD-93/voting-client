import React, { Component } from 'react';
import { connect } from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {
  mapStateToProps(state) {
    return {
      pair: state.getIn(['vote', 'pair']),
      winner: state.get('winner')
    };
  }
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref='winner' winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    )
  }
}

connect(mapStateToProps)(Voting);
export default Voting;