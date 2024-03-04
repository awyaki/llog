import { State } from "./useConditions";

export const modalCreateReducer = (state: State): State => {
  const newCurrentCondions = [...state.currentConditions];
  const newId =
    state.createConditions
      .map((condtion) => condtion.id)
      .reduce((acc, cur) => Math.max(acc, cur), 0) + 1;
  return {
    createConditions: state.createConditions.concat({
      id: newId,
      operator: "AND",
      subject: "",
      not: false,
      predicate: "",
      input: "",
    }),
    currentConditions: newCurrentCondions,
  };
};
