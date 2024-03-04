import { Reducer } from "react";
import { State } from "./useConditions";

type Action = {
  id: number;
};

export const drawerToggleNotReducer: Reducer<State, Action> = (
  state,
  action,
) => {
  const { createConditions, currentConditions } = state;
  const newCreateConditions = [...createConditions];
  const index = currentConditions.findIndex(({ id }) => id === action.id);
  const { not, ...rest } = currentConditions[index];
  const newCurrentConditions = currentConditions
    .slice(0, index)
    .concat({ not: !not, ...rest })
    .concat(currentConditions.slice(index + 1));
  return {
    createConditions: newCreateConditions,
    currentConditions: newCurrentConditions,
  };
};
