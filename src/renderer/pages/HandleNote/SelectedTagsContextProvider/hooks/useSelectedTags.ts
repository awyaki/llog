import { useReducer, Reducer } from 'react';

import { Tag } from '@prisma/client';

type State = Tag[];

export type Action = {
  type: 'SELECTED_TAGS/TOGGLE',
  tag: Tag;
} | {
  type: 'SELECTED_TAGS/ADD',
  tag: Tag,
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'SELECTED_TAGS/TOGGLE': {
      const index = state.findIndex(({ id }) => id === action.tag.id);
      const nextState = index === -1 
                          ? state.concat(action.tag)
                          : state.slice(0, index).concat(state.slice(index + 1));
      return nextState.sort();
    }
    case 'SELECTED_TAGS/ADD': {
      return state.concat(action.tag);
    }
    default:
      return state;
  }
};

export const useSelectedTags = () => useReducer(reducer, []);
