import { Reducer } from 'react';
import { State } from './useConditions';

type Action = {
  id: number;
};

export const drawerToggleOperatorReducer: Reducer<State, Action> = (state, action) => {
  const { createConditions, currentConditions } = state;
  const newCreateConditions = [...createConditions];
  const index = currentConditions.findIndex(({ id }) => id === action.id);
  const { operator, ...rest } = currentConditions[index];
  const newOperator = operator === 'AND' ? 'OR' : 'AND';
  const newCurrentConditions = currentConditions
                                .slice(0, index)
                                .concat({ operator: newOperator, ...rest })
                                .concat(currentConditions.slice(index+1));
  return {
    createConditions: newCreateConditions,
    currentConditions: newCurrentConditions,
  };
};
