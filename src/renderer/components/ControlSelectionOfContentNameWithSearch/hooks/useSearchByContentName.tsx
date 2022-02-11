import { Reducer, useReducer } from 'react';

import { createNGramTokenMap } from '~/utils';

export type ContentNameWithId = {
  id: number;
  contentName: string;
};


type SearchByContentNameState = {
  contentNames: ContentNameWithId[];
  searchContentNameQuery: string;
  filteredContentNames: ContentNameWithId[];
  tokenMapOfContentNames: Map<string, Set<number>>;
};

type SearchByContentNameAction = {
  type: 'SEARCH_CONTENT_NAME/CALCULATE_WITH_NEW_CONTENT_NAMES';
  contentNames: ContentNameWithId[];
} | {
  type: 'SEARCH_CONTENT_NAME/SET_SEARCH_CONTENT_NAME_QUERY';
  searchContentNameQuery: string;
};

export const searchByContentNameRreducer: Reducer<
  SearchByContentNameState,
  SearchByContentNameAction
> = (
state,
action
) => {
  switch (action.type) {
    case 'SEARCH_CONTENT_NAME/CALCULATE_WITH_NEW_CONTENT_NAMES': {
      const nextState = { ...state };
      const nextContentNames = [...action.contentNames];

      const nextTokenMapOfContentName = createNGramTokenMap(action.contentNames.map(({ id, contentName }) => ({ id, text: contentName })));
      
      nextState.contentNames = nextContentNames;
      nextState.tokenMapOfContentNames = nextTokenMapOfContentName;

      return nextState; 
    }
    
    case 'SEARCH_CONTENT_NAME/SET_SEARCH_CONTENT_NAME_QUERY': {
      const nextState = { ...state };
      const nextSearchContentNameQuery = action.searchContentNameQuery;
      
      const nextFilteredContentNames = (() => {
        if (nextSearchContentNameQuery === '') return [...state.contentNames];
        const idSetOfContentName = state.tokenMapOfContentNames.get(action.searchContentNameQuery);
        if (idSetOfContentName === undefined) return [];
        return state.contentNames.filter(({ id }) => idSetOfContentName.has(id));
      })(); 
      
      nextState.searchContentNameQuery = nextSearchContentNameQuery;
      nextState.filteredContentNames = nextFilteredContentNames;

      return nextState;
    }

    default:
      return state;
  }
};

type UseSearchByContentNameArgument = { 
  contentNames: ContentNameWithId[]
};

const init = (contentNames: ContentNameWithId[]): SearchByContentNameState => {
  const initialContentNames = [...contentNames];
  const initialFilteredContentNames = [...contentNames];
  const initialTokenMapOfContentNames = createNGramTokenMap(contentNames.map(({ id, contentName }) => ({ id, text: contentName })));

  return {
    contentNames: initialContentNames,
    filteredContentNames: initialFilteredContentNames,
    tokenMapOfContentNames: initialTokenMapOfContentNames,
    searchContentNameQuery: '' 
  };
};

export const useSearchByContentName = ({
  contentNames
  }: UseSearchByContentNameArgument) => {

  const [{ filteredContentNames, searchContentNameQuery }, dispatch] = useReducer(searchByContentNameRreducer,  contentNames, init); 
  
  const setSearchContentNameQuery = (searchContentNameQuery: string) => {
    dispatch({ type: 'SEARCH_CONTENT_NAME/SET_SEARCH_CONTENT_NAME_QUERY', searchContentNameQuery: searchContentNameQuery });
  };
  
  return {
    filteredContentNames,
    searchContentNameQuery,
    setSearchContentNameQuery,
  };
};


