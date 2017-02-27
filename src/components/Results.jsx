import React from 'react';

const Results = (props) => {
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
    <div className='results'>
      {getPair().map(entry =>
        <div key={entry} className='entry'>
          <h1>{entry}</h1>
          <div className='voteCount'>
            {getVotes(entry)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;