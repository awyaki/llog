import { Reducer } from 'react';
import { State } from './useConditions';

type Action = {
  id: number;
  newInput: string;
};

export const modalChangeInputReducer: Reducer<State, Action> = (state, action) => {
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
};
