import { useReducer, Reducer } from 'react';
import { Block } from '@prisma/client';

type State = Block[];

export type Action = {
  type: 'SELECTED_BLOCKS/TOGGLE';
  block: Block;
} | {
  type: 'SELECTED_BLOCKS/CONCAT';
  blocks: Block[];
} | {
  type: 'SELECTED_BLOCKS/SET';
  blocks: Block[];
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

    case 'SELECTED_BLOCKS/CONCAT': {
      return state.concat(action.blocks);
    }

    case 'SELECTED_BLOCKS/SET': {
      return action.blocks;
    }
  }
};

export const useSlectedBlocks = () => useReducer(reduer, []);
