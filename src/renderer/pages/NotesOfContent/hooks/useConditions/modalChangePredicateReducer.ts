import { Reducer } from 'react';
import { State } from './useConditions';
import { Condition } from '../../types';

type Action = {
  type: 'MODAL/CHANGE_PREDICATE',
  id: number;
  newPredicate: Condition['predicate'];
};

export const modalChangePredicateReducer: Reducer<State, Action> = (state, action) => {
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
};
