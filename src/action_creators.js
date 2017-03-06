export const setState = (state) => {
  return {
    type: 'SET_STATE',
    state
  };
}

export const vote = (entry) => {
  return {
    meta: { remote: true },
    type: 'VOTE',
    entry
  };
}

export function next() {
  return {
    meta: { remote: true },
    type: 'NEXT'
  };
}