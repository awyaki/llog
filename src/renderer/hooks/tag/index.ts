import { useReducer, Reducer } from 'react';
import { 
  State,
  Action,
} from './types';

import { tagCreateReducer } from './tagCreateReducer';



const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'APP/CREATE_TAG':
      return tagCreateReducer(state, action);
  }
};

const initialState: State = {
  tags: [],
};

export type { State as TagState, Action as TagAction };

export const useTag = () => useReducer(reducer, initialState);
