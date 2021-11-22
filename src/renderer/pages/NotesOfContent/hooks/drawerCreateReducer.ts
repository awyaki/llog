import { State } from './useConditions';

export const drawerCreateReducer = (state: State): State => {
  const { currentConditions, createConditions } = state;
  const newCurrentConditions = currentConditions.concat([...createConditions]
                                  .map((condition) => { 
                                        return { 
                                          isValid: true, 
                                          ...condition }
                                  }));

  return {
    createConditions: [],
    currentConditions: newCurrentConditions,
  };
};
