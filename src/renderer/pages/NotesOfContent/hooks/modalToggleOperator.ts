import { Reducer } from 'react';
import { State } from './useConditions';

type Action = {
  id: number;
};

export const modalToggleOperator: Reducer<State, Action> = (state, action) => {
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
};
