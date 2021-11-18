import { useReducer, Reducer } from 'react';
import { Condition } from '~/pages/NotesOfContent/types';

type State = Condition[];

export type Action = {
  type: 'CONDITION_CREATE_MODAL/CREATE',
} | {
  type: 'CONDITION_CREATE_MODAL/CHANGE_SUBJECT',
  id: number,
  subject: Condition['subject'];
};

const createNewCondition = (state: State): State => {
  const newId = state.map((cond) => cond.id).reduce((acc, cur) => Math.max(acc, cur), 0) + 1;
  const newCondition: Condition = {
    id: newId,
    operator: 'AND',
    subject: '',
    predicate: '',
    input: '',
  };

  return state.concat(newCondition);
};

const changeSubject = (state: State, id: number, newSubject: Condition['subject']) => {
  const index = state.findIndex((cond) => cond.id === id);
  const { subject, ...rest } = { ...state[index] };
  return state.slice(0, index).concat({ subject: newSubject, ...rest}).concat(state.slice(index + 1));
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'CONDITION_CREATE_MODAL/CREATE': {
      return createNewCondition(state);
    }
    case 'CONDITION_CREATE_MODAL/CHANGE_SUBJECT': {
      return changeSubject(state, action.id, action.subject);
    }
  }
};

export const useConditionList = () => useReducer(reducer, []);


