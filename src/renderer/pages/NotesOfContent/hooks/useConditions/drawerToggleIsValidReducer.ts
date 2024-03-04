import { Reducer } from "react";
import { State } from "./useConditions";

type Action = {
  id: number;
};

export const drawerToggleIsValidRecucer: Reducer<State, Action> = (
  state,
  action,
) => {
  const { createConditions, currentConditions } = state;
  const newCreateConditions = [...createConditions];
  const index = currentConditions.findIndex(({ id }) => id === action.id);
  const { isValid, ...rest } = { ...currentConditions[index] };
  const newCurrentConditions = currentConditions
    .slice(0, index)
    .concat({ isValid: !isValid, ...rest })
    .concat(currentConditions.slice(index + 1));
  return {
    createConditions: newCreateConditions,
    currentConditions: newCurrentConditions,
  };
};
