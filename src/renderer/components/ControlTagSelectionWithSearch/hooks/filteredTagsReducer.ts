import { Reducer } from 'react';

import { createNGramTokenMap } from '~/utils';

import { Tag } from '@prisma/client';

type State = {
  tagNameQuery: string;
  filteredTags: Tag[];
  tagNameToken: Map<string, Set<number>>;
};

type Action = {
  type: 'FILTERED_TAGS/CALCULATE_WITH_NEW_TAGS';
  tags: Tag[];
} | {
  type: 'FILTERED_TAGS/CALCULATE_WITH_NEW_TAG_NAME_QUERY'
  tagNameQuery: string;
  tags: Tag[];
};

export const filteredTagsReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'FILTERED_TAGS/CALCULATE_WITH_NEW_TAGS': {
      const nextState = { ...state };
      const nextTagNameToken = createNGramTokenMap(action.tags.map(({ id, name }) => ({ id, text: name })));

      const tagIdsSet = nextTagNameToken.get(state.tagNameQuery) ?? new Set();
      const nextFilteredTags = action.tags
                                  .filter(({ id }) => tagIdsSet.has(id));

      nextState.filteredTags = nextFilteredTags;
      nextState.tagNameToken = nextTagNameToken;

      return nextState;
    }
    case 'FILTERED_TAGS/CALCULATE_WITH_NEW_TAG_NAME_QUERY': {
      const nextState = { ...state };
      const tagIdSet = state.tagNameToken.get(action.tagNameQuery) ?? new Set();

      const nextFilteredTags = action.tags
                                .filter(({ id }) => tagIdSet.has(id));

      nextState.filteredTags = nextFilteredTags;
      nextState.tagNameQuery = action.tagNameQuery;
      return nextState;
    }

    default: 
      return state;
  }
};
