import { useReducer, Reducer } from 'react';
import { Content } from '@prisma/client';

type State = Content[];

export type Action = {
  type: 'CONTENTS/UPDATE';
  contents: Content[];
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'CONTENTS/UPDATE':
    return action.contents;
    default:
      return state;
  }
};

const defaultState: State = [];

export const useContents = () => useReducer(reducer, defaultState);
