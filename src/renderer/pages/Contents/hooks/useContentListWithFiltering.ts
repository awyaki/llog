import { useReducer, Reducer } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { createNGramTokenMap } from '~/utils';

type State = {
  contents: ContentWithRelation[];
  filtered: ContentWithRelation[];
  searchQuery: string;
  tokenMap: Map<string, Set<number>>;
};

type Action = {
  type: 'CONTENTS/SET_CONTENTS';
  contents: ContentWithRelation[];
} | {
  type: 'CONTENTS/SET_SEARCH_QUERY';
  searchQuery: string;
};

const reducer: Reducer<State, Action> = (state, action) => {

  switch (action.type) {

    case 'CONTENTS/SET_CONTENTS': {
      const newTokenMap = createNGramTokenMap(action.contents.map(({ id, name }) => ({ id, text: name}))); // This process is may expensive.
      const setOfId = newTokenMap.get(state.searchQuery) ?? new Set(action.contents.map(({ id }) => id));
      const newFiltered = action.contents.filter((content) => setOfId.has(content.id));
      return { 
          contents: action.contents, 
          filtered: newFiltered,
          searchQuery: state.searchQuery,
          tokenMap: newTokenMap,
      };
    }   

    case 'CONTENTS/SET_SEARCH_QUERY': {
      const setOfid = state.tokenMap.get(action.searchQuery) ?? new Set(state.contents.map(({ id }) => id));
      const newFiltered = state.contents.filter((content) => setOfid.has(content.id));
      return {
        contents: state.contents,
        filtered: newFiltered,
        searchQuery: action.searchQuery,
        tokenMap: state.tokenMap, 
      };
    }

    default: {
      return state;
    }
  }

};

const initialState: State = {
  contents: [],
  searchQuery: '',
  filtered: [],
  tokenMap: new Map(),
};

export const useContentListWithFiltering = () => useReducer(reducer, initialState);

