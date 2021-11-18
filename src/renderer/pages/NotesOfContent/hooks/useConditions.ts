import { useReducer, Reducer } from 'react';
import { Condition } from '../types';

type State = {
  createConditions: Condition[];
  currentConditions: (Condition & { isVaild: boolean })[];
};

export type Action = {
  type: 'MODAL/CREATE';
};


const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'MODAL/CREATE': {
      const newId = state.createConditions.map((cond) => cond.id).reduce((acc, cur) => Math.max(acc, cur), 0) + 1;
      
      return {
        createConditions: state.createConditions.concat({ id: newId, operator: 'AND', subject: '', predicate: '', input: '' }),
        currentConditions: state.currentConditions, 
      };
    }
  }
};

const initialState: State = {
  createConditions: [],
  currentConditions: [],
};
export const useConditions = () => useReducer(reducer, initialState);
