import { Reducer } from 'react';
import { State } from './useConditions';


type Action = {
  type: 'MODAL/TOGGLE_NOT';
  id: number;
};

export const modalToggleNotReducer: Reducer<State, Action> = (state, action) => {
  const { currentConditions, createConditions } = state;
  const newCurrentConditions = [...currentConditions];
  const index = createConditions.findIndex(({ id }) => action.id === id);
  const { not, ...rest } = createConditions[index];
  const newCreateConditions = createConditions
                                .slice(0, index)
                                .concat({ not: !not, ...rest })
                                .concat(createConditions.slice(index+1));
  return {
    createConditions: newCreateConditions, 
    currentConditions: newCurrentConditions,
  };
};
