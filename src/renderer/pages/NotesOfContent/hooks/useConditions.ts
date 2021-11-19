import { useReducer, Reducer } from 'react';
import { Condition } from '../types';

type State = {
  createConditions: Condition[];
  currentConditions: (Condition & { isVaild: boolean })[];
};

export type Action = {
  type: 'MODAL/CREATE';
} | {
  type: 'MODAL/CHAGE_SUBJECT';
  id: number,
  newSubject: Condition['subject'];
} | {
  type: 'MODAL/TOGGLE_OPERATOR';
  id: number;
};


const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'MODAL/CREATE': {
      const newId = state.createConditions.map((cond) => cond.id).reduce((acc, cur) => Math.max(acc, cur), 0) + 1;
      
      return {
        createConditions: state.createConditions.concat({ id: newId, operator: 'AND', subject: '', not: false, predicate: '', input: '' }),
        currentConditions: state.currentConditions, 
      };
    }

    case 'MODAL/CHAGE_SUBJECT': {
      const { createConditions, currentConditions } = state;
      const newCurrentConditions = [...currentConditions];
      const index = createConditions.findIndex(({ id }) => action.id === id);
      const { subject, ...rest } = createConditions[index];
      const newCreateCondtion = createConditions
                                  .slice(0, index)
                                  .concat({ subject: action.newSubject, ...rest })
                                  .concat(createConditions.slice(index+1));
      return {
        createConditions: newCreateCondtion,
        currentConditions: newCurrentConditions,
      };
    }
    case 'MODAL/TOGGLE_OPERATOR': {
      const { createConditions, currentConditions } = state;
      const newCurrentConditions = [...currentConditions];
      const index = createConditions.findIndex(({ id }) => action.id === id);
      const { operator, ...rest } = createConditions[index];
      const newOperator = operator === 'AND' ? 'OR' : 'AND';
      const newCreateConditions = createConditions
                                    .slice(0, index)
                                    .concat({ operator: newOperator, ...rest })
                                    .concat(createConditions.slice(index + 1));
      return {
        createConditions: newCreateConditions,
        currentConditions: newCurrentConditions,
      };
    }
  }
};

const initialState: State = {
  createConditions: [],
  currentConditions: [],
};
export const useConditions = () => useReducer(reducer, initialState);
