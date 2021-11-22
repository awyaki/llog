import { useReducer, Reducer } from 'react';
import { Condition, ConditionWithIsValid } from '../types';

import { modalCreateReducer } from './modalCreateReducer';
import { modalChangeSubjectReducer } from './modalChangeSubjectReducer';
import { modalToggleOperator } from './modalToggleOperator';
import { modalToggleNotReducer } from './modalToggleNotReducer';
import { modalDeleteReducer } from './modalDeleteReducer';
import { modalChangeInputReducer } from './modalChangeInputReducer';
import { modalChangePredicateReducer } from './modalChangePredicateReducer';
import { modalDeleteAllReducer } from './modalDeleteAllReducer';

import { drawerCreateReducer } from './drawerCreateReducer';
import { drawerToggleIsValidRecucer } from './drawerToggleIsValidReducer';

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
  type: 'MODAL/CHANGE_PREDICATE';
  id: number;
  newPredicate: Condition['predicate'];
} | {
  type: 'MODAL/DELETE_ALL';
} | {
  type: 'DRAWER/CREATE';
} | {
  type: 'DRAWER/TOGGLE_ISVALID';
  id: number;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'MODAL/CREATE':
      return modalCreateReducer(state);

    case 'MODAL/CHANGE_SUBJECT': 
      return modalChangeSubjectReducer(state, action);

    case 'MODAL/TOGGLE_OPERATOR':
      return modalToggleOperator(state, action);

    case 'MODAL/DELETE_CONDITION':
      return modalDeleteReducer(state, action);

    case 'MODAL/CHANGE_INPUT': 
      return modalChangeInputReducer(state, action);

    case 'MODAL/CHANGE_PREDICATE': 
      return modalChangePredicateReducer(state, action);

    case 'MODAL/DELETE_ALL': 
      return modalDeleteAllReducer(state);

    case 'MODAL/TOGGLE_NOT': 
      return modalToggleNotReducer(state, action);

    case 'DRAWER/CREATE': 
      return drawerCreateReducer(state);
    
    case 'DRAWER/TOGGLE_ISVALID':
      return drawerToggleIsValidRecucer(state, action);

    default:
      return state;
  }
};

const initialState: State = {
  createConditions: [],
  currentConditions: [],
};
export const useConditions = () => useReducer(reducer, initialState);
