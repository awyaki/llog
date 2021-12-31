import { Reducer } from 'react';
import { Tag } from '@prisma/client';

import { State } from './types';

export type CreateTagAction = {
  type: 'APP/CREATE_TAG';
  id: Tag['id'];
  name: Tag['name'];
}

export const tagCreateReducer: Reducer<State, CreateTagAction> = (state, action) => {
  const newState = state.concat({ id: action.id, name: action.name });
  return newState;
};
