import { useReducer, Reducer } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { createNGramTokenMap } from '~/utils';

type State = {
  contents: ContentWithRelation[];
  filtered: ContentWithRelation[];
  searchedTagIds: number[];
  searchQuery: string;
  tokenMap: Map<string, Set<number>>;
};

type Action = {
  type: 'CONTENTS/SET_CONTENTS';
  contents: ContentWithRelation[];
} | {
  type: 'CONTENTS/SET_SEARCH_QUERY';
  searchQuery: string;
} | {
  type: 'CONTENTS/SET_SEARCHED_TAG_IDS';
  searchedTagIds: number[];
};

const isSearchMode = (searchQuery: string, searchedTagIds: number[]) => {
  const isEmptyString = searchQuery === '';
  const isEmptyArray = searchedTagIds.length === 0;
  if (!isEmptyString) return true;
  if (!isEmptyArray) return true;
  return false;
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {

    case 'CONTENTS/SET_CONTENTS': {


      const newTokenMap = createNGramTokenMap(action.contents.map(({ id, name }) => ({ id, text: name}))); // This process is may expensive.
      const setOfId = newTokenMap.get(state.searchQuery) ?? new Set();
      const setOfSearchedTagIds = new Set(state.searchedTagIds);



      const isSearchQueryEmpty = state.searchQuery === '';
      const isSearchedTagIdsEmpty = state.searchedTagIds.length === 0;

      const filteredBySearchQuery = isSearchQueryEmpty 
                            ? [...action.contents]
                            : action.contents.filter((content) => setOfId.has(content.id));
                              
      const filteredBySearchQueryAndTags = isSearchedTagIdsEmpty
                                            ? filteredBySearchQuery
                                            : filteredBySearchQuery
                                                .filter(({ tags }) => tags.some(({ id }) => (setOfSearchedTagIds.has(id))));

      return { 
          contents: [...action.contents], 
          filtered: filteredBySearchQueryAndTags,
          searchedTagIds: [...state.searchedTagIds],
          searchQuery: state.searchQuery,
          tokenMap: newTokenMap,
      };
    }   

    case 'CONTENTS/SET_SEARCH_QUERY': {
      const setOfId = state.tokenMap.get(action.searchQuery) ?? new Set();
      const setOfSearchedTagIds = new Set(state.searchedTagIds);

      const isSearchQueryEmpty = action.searchQuery === '';
      const isSearchedTagIdsEmpty = state.searchedTagIds.length === 0;

      const filteredBySearchQuery = isSearchQueryEmpty 
                            ? [...state.contents]
                            : state.contents.filter((content) => setOfId.has(content.id));
                              
      const filteredBySearchQueryAndTags = isSearchedTagIdsEmpty
                                            ? filteredBySearchQuery
                                            : filteredBySearchQuery
                                                .filter(({ tags }) => tags.some(({ id }) => (setOfSearchedTagIds.has(id))));
      return {
        contents: [...state.contents],
        filtered: filteredBySearchQueryAndTags,
        searchedTagIds: [...state.searchedTagIds],
        searchQuery: action.searchQuery,
        tokenMap: state.tokenMap, 
      };
    }
    
    case 'CONTENTS/SET_SEARCHED_TAG_IDS': {
      const setOfId = state.tokenMap.get(state.searchQuery) ?? new Set();
      const setOfSearchedTagIds = new Set(action.searchedTagIds);


      const isSearchQueryEmpty = state.searchQuery === '';
      const isSearchedTagIdsEmpty = action.searchedTagIds.length === 0;

      const filteredBySearchQuery = isSearchQueryEmpty 
                            ? [...state.contents]
                            : state.contents.filter((content) => setOfId.has(content.id));
                              
      console.log('useContentListWithFiltering setOfSearchedTagIds', setOfSearchedTagIds);
      const filteredBySearchQueryAndTags = isSearchedTagIdsEmpty
                                            ? filteredBySearchQuery
                                            : filteredBySearchQuery
                                                .filter(({ tags }) => tags.some(({ id }) => setOfSearchedTagIds.has(id)));


      return {
        contents: [...state.contents],
        filtered: filteredBySearchQueryAndTags,
        searchedTagIds: [...action.searchedTagIds],
        searchQuery: state.searchQuery,
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
  filtered: [],
  searchedTagIds: [],
  searchQuery: '',
  tokenMap: new Map(),
};

export const useContentListWithFiltering = () => useReducer(reducer, initialState);

