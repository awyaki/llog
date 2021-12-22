import { Reducer } from 'react';
import { Condition } from '../../types';
import { State } from './useConditions';

import { Subject, Predicate } from '../../types';

const defaultPredicate = (subject: Subject): Predicate => {
  switch(subject) {
    case 'Date':
      return 'IS SINCE';
    default:
      return 'IS';
  }
};

type Action = {
  id: number;
  newSubject: Condition['subject'];
};

export const modalChangeSubjectReducer: Reducer<State, Action> = (state, action) => {
  const { createConditions, currentConditions } = state;
  const newCurrentConditions = [...currentConditions];
  const index = createConditions.findIndex(({ id }) => action.id === id);
  const { subject, predicate, ...rest } = createConditions[index]
  const newCreateCondtion = createConditions
                              .slice(0, index)
                              .concat({ subject: action.newSubject, predicate: defaultPredicate(action.newSubject), ...rest })
                              .concat(createConditions.slice(index+1));
  return {
    createConditions: newCreateCondtion,
    currentConditions: newCurrentConditions,
  };
};
