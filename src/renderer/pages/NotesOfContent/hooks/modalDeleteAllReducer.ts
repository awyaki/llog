import { State } from './useConditions';

export const modalDeleteAllReducer = (state: State): State => {
  const { currentConditions } = state;
  const newCurrentConditions = [...currentConditions];
  return {
    createConditions: [],
    currentConditions: newCurrentConditions,
  };
};
