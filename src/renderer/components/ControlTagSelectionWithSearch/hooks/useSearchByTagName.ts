import { 
    useReducer,
    Reducer,
} from 'react';

import { createNGramTokenMap } from '~/utils';

import { Tag } from '@prisma/client';

import { 
    filteredTagsReducer, 
    Action,
    State
} from './filteredTagsReducer';


type UseSearchTagsByNameArgument = {
  tags: Tag[];
};

export const useSearchTagsByName = ({ tags }: UseSearchTagsByNameArgument) => {

  const [{ filteredTags, tagNameQuery }, dispatch] = useReducer<Reducer<State, Action>, State>(filteredTagsReducer, { 
    tags: [...tags],
    filteredTags: [...tags],
    tagNameTokenMap: new Map(),
    tagNameQuery: '',
  }, ({ tags, filteredTags }) => {

    const initialTagNameTokenMap = createNGramTokenMap(tags.map(({ id, name }) => ({ id, text: name })));
    return {
      tags: tags,
      filteredTags: filteredTags,
      tagNameTokenMap: initialTagNameTokenMap,
      tagNameQuery: '',
    };
  });

  const setTagNameQuery = (tagNameQuery: string) => {
    dispatch({ type: 'FILTERED_TAGS/CALCULATE_WITH_NEW_TAG_NAME_QUERY', tagNameQuery: tagNameQuery });
  };


  return {
    filteredTags,
    tagNameQuery,
    setTagNameQuery, 
  };
};
