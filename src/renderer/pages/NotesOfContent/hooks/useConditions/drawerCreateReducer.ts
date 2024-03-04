import { State } from "./useConditions";

export const drawerCreateReducer = (state: State): State => {
  const { currentConditions, createConditions } = state;
  const newId =
    currentConditions
      .map((condition) => condition.id)
      .reduce((acc, cur) => Math.max(acc, cur), 0) + 1;
  const newCurrentConditions = currentConditions.concat(
    [...createConditions].map(({ id, ...rest }, i) => {
      return {
        id: newId + i,
        isValid: true,
        ...rest,
      };
    }),
  );

  return {
    createConditions: [],
    currentConditions: newCurrentConditions,
  };
};
