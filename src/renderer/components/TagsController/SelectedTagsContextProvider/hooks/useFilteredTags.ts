import { useReducer, Reducer } from 'react';

import { createNGramTokenMap } from '~/utils';

import { Tag } from '@prisma/client';

type State = {
  tags: Tag[];
  filteredTags: Tag[];
  searchQuery: string,
  tokenMap: Map<string, Set<number>>;
};

type Action = {
  type: 'TAGS_CONTROLLER/SET_TAGS',
  tags: Tag[];
} | {
  type: 'TAGS_CONTROLLER/SET_SEARCH_QUERY';
  searchQuery: string;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'TAGS_CONTROLLER/SET_TAGS': {
      const newTokenMap = createNGramTokenMap(action.tags.map(({ id, name }) => ({ id, text: name })));
      const setOfIds = newTokenMap.get(state.searchQuery) ?? new Set();

      const isSearchQueryEmpty = state.searchQuery === '';
      
      const newFilteredTags = isSearchQueryEmpty 
                                ? [...action.tags]
                                : action.tags.filter(({ id }) => setOfIds.has(id));


      return {
        tags: [...action.tags],
        filteredTags: newFilteredTags,
        searchQuery: '',
        tokenMap: newTokenMap,
      };
    }

    case 'TAGS_CONTROLLER/SET_SEARCH_QUERY': {
      const setOfIds = state.tokenMap.get(action.searchQuery) ?? new Set();

      const isSearchQueryEmpty = action.searchQuery === '';

      const newFilteredTags = isSearchQueryEmpty 
                                ? [...state.tags]
                                : state.tags.filter(({ id }) => setOfIds.has(id));
      

      return {
        tags: [...state.tags],
        filteredTags: newFilteredTags,
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
  tags: [],
  filteredTags: [],
  searchQuery: '',
  tokenMap: new Map(),
};

export const useFilterSelectedTags = useReducer(reducer, initialState);

