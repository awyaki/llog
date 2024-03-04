import { useReducer, Reducer } from "react";

import { createNGramTokenMap } from "~/utils";

import { Tag } from "@prisma/client";

type State = {
  tags: Tag[];
  filterTagsbyUserInput: (userInput: string) => Tag[];
  tokenMap: Map<string, Set<number>>;
};

type Action = {
  type: "TAGS_CONTROLLER/SET_TAGS";
  tags: Tag[];
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TAGS_CONTROLLER/SET_TAGS": {
      const newTokenMap = createNGramTokenMap(
        action.tags.map(({ id, name }) => ({ id, text: name })),
      );

      const newFilterTagsByUserInput = (userInput: string): Tag[] => {
        const setOfIds = newTokenMap.get(userInput) ?? new Set();

        const isUserInputEmpty = userInput === "";

        const filteredTags = isUserInputEmpty
          ? [...action.tags]
          : action.tags.filter(({ id }) => setOfIds.has(id));
        return filteredTags;
      };

      return {
        tags: [...action.tags],
        filterTagsbyUserInput: newFilterTagsByUserInput,
        searchQuery: "",
        tokenMap: newTokenMap,
      };
    }

    default: {
      return state;
    }
  }
};

const initialState: State = {
  tags: [],
  filterTagsbyUserInput: () => [],
  tokenMap: new Map(),
};

export const useFilterTags = () => useReducer(reducer, initialState);
