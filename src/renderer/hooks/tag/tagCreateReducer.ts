import { Reducer } from 'react';

import { State, Action } from './types';

export const tagCreateReducer: Reducer<State, Action> = (state, action) => {
  const newState = { ...state };
  newState.tags = state.tags.concat({ id: action.id, name: action.name, contentId: null, noteId: null });
  return newState;
};
