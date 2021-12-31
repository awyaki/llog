import { useReducer, Reducer } from 'react';
import { State } from './types';
import { CreateTagAction, tagCreateReducer } from './tagCreateReducer';
import { SetTagAction, tagSetReducer } from './tagSetReducer';


export type Action = CreateTagAction | SetTagAction;

const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'APP/CREATE_TAG':
      return tagCreateReducer(state, action);
    case 'APP/SET_TAG':
      return tagSetReducer(action.tags);
  }
};

const initialState: State = [];

export type { State as TagState, Action as TagAction };

export const useTag = () => useReducer(reducer, initialState);
