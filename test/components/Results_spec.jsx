import React from 'react';
import { renderIntoDocument, scryRenderedDOMComponentsWithClass } from 'react-addons-test-utils';
import { expect } from 'chai';
import { List, Map } from 'immutable';

import Results from '../../src/components/Results';

describe('Results', () => {
  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Following', 'Memento');
    const tally = Map({'Following': 5});
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );

    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [follow, memento] = entries.map(e => e.textContent);
    
    // expect(entries.length).to.equal(2);
    expect(follow).to.contain('Following');
    expect(follow).to.contain('5');
    expect(memento).to.contain('Memento');
    expect(memento).to.contain('0');
  });
});