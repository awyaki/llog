import { Tag } from "@prisma/client";

import { State } from "./types";

type Action = {
  type: "APP/SET_TAG";
  tags: Tag[];
};

export const tagSetReducer = (nextState: State): State => {
  return nextState;
};

export type { Action as SetTagAction };
