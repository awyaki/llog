import { Reducer } from 'react';
import { State } from './useConditions';

type Action = {
  id: number;
};

export const modalDeleteReducer: Reducer<State, Action> = (state, action) => {
  const { createConditions, currentConditions } = state;
  const newCurrentConditions = [...currentConditions];
  const index = createConditions.findIndex(({ id }) => action.id === id);
  const newCreateCondition = createConditions
                              .slice(0, index)
                              .concat(createConditions.slice(index+1));
  return {
    createConditions: newCreateCondition,
    currentConditions: newCurrentConditions,
  };
};
