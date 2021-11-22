import { Reducer } from 'react';
import { Condition } from '../types';
import { State } from './useConditions';

type Action = {
  id: number;
  newSubject: Condition['subject'];
};

export const changeSubjectReducer: Reducer<State, Action> = (state, action) => {
  const { createConditions, currentConditions } = state;
  const newCurrentConditions = [...currentConditions];
  const index = createConditions.findIndex(({ id }) => action.id === id);
  const { subject, ...rest } = createConditions[index]
  const newCreateCondtion = createConditions
                              .slice(0, index)
                              .concat({ subject: action.newSubject, ...rest })
                              .concat(createConditions.slice(index+1));
  return {
    createConditions: newCreateCondtion,
    currentConditions: newCurrentConditions,
  };
};
