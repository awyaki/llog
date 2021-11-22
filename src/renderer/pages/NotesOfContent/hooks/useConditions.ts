import { useReducer, Reducer } from 'react';
import { Condition, ConditionWithIsValid } from '../types';

import { modalCreateReducer } from './modalCreateReducer';
import { modalChangeSubjectReducer } from './modalChangeSubjectReducer';
import { modalToggleOperator } from './modalToggleOperator';
import { modalToggleNotReducer } from './modalToggleNotReducer';
import { modalDeleteReducer } from './modalDeleteReducer';

export type State = {
  createConditions: Condition[];
  currentConditions: ConditionWithIsValid[];
};

export type Action = {
  type: 'MODAL/CREATE';
} | {
  type: 'MODAL/CHANGE_SUBJECT';
  id: number,
  newSubject: Condition['subject'];
} | {
  type: 'MODAL/TOGGLE_OPERATOR';
  id: number;
} | {
  type: 'MODAL/TOGGLE_NOT';
  id: number;
} | {
  type: 'MODAL/DELETE_CONDITION';
  id: number;
} | {
  type: 'MODAL/CHANGE_INPUT';
  id: number;
  newInput: string;
} | {
  type: 'MODAL/CHANGE_PREDICATE',
  id: number;
  newPredicate: Condition['predicate'];
} | {
  type: 'MODAL/DELETE_ALL';
} | {
  type: 'DRAWER/CREATE',
};


const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'MODAL/CREATE': {
      return modalCreateReducer(state);
    }

    case 'MODAL/CHANGE_SUBJECT': {
      return modalChangeSubjectReducer(state, action);
    }

    case 'MODAL/TOGGLE_OPERATOR': {
      return modalToggleOperator(state, action);
    }

    case 'MODAL/DELETE_CONDITION': {
      return modalDeleteReducer(state, action);
    }

    case 'MODAL/CHANGE_INPUT': {
      const { createConditions, currentConditions } = state;
      const newCurrentConditions = [...currentConditions];
      const index = createConditions.findIndex(({ id }) => action.id === id);
      const { input, ...rest } = createConditions[index];
      const newCreateCondition = createConditions
                                  .slice(0, index)
                                  .concat({ input: action.newInput, ...rest })
                                  .concat(createConditions.slice(index+1));
      return {
        createConditions: newCreateCondition,
        currentConditions: newCurrentConditions,
      };
    }

    case 'MODAL/CHANGE_PREDICATE': {
      const { createConditions, currentConditions } = state;
      const newCurrentConditions = [...currentConditions];
      const index = createConditions.findIndex(({ id }) => action.id === id);
      const { predicate, ...rest } = createConditions[index];
      const newCreateCondition = createConditions
                                  .slice(0, index)
                                  .concat({ predicate: action.newPredicate, ...rest })
                                  .concat(createConditions.slice(index+1));
      return {
        createConditions: newCreateCondition,
        currentConditions: newCurrentConditions,
      };
    }

    case 'MODAL/DELETE_ALL': {
      const { currentConditions } = state;
      const newCurrentConditions = [...currentConditions];
      return {
        createConditions: [],
        currentConditions: newCurrentConditions,
      }
    }

    case 'MODAL/TOGGLE_NOT': {
      return modalToggleNotReducer(state, action);
    }

    case 'DRAWER/CREATE': {
      const { currentConditions, createConditions } = state;
      const newCurrentConditions = currentConditions.concat([...createConditions]
                                      .map((condition) => { 
                                            return { 
                                              isValid: true, 
                                              ...condition }
                                      }));

      return {
        createConditions: [],
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
