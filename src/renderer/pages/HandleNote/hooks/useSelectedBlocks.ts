import { useReducer, Reducer } from 'react';
import { Block } from '@prisma/client';

type State = Block[];

export type Action = {
  type: 'SELECTED_BLOCKS/TOGGLE';
  block: Block;
};

const reduer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'SELECTED_BLOCKS/TOGGLE': {
      const index = state.findIndex(({ id }) => id === action.block.id);
      const nextState = index === -1 
              ? state.concat(action.block)
              : state.slice(0, index).concat(state.slice(index + 1));
      return nextState.sort((a, b) => a.unitNumber - b.unitNumber);
    }
  }
};

export const useSlectedBlocks = () => useReducer(reduer, []);
