import { 
  useReducer,
  useCallback,
  useEffect,
} from 'react';

import { NoteWithRelation } from '~/pages/type';

import { Tag } from '@prisma/client';

import { 
  searchNotesReducer,
} from './searchNoteReducer';

import { getAllTag } from '~/api';


export const useSearchNotes = (initialNotes: NoteWithRelation[]) => {
  const [
    { filteredNotes, sinceQuery, untilQuery, tagsQuery, levelsQuery },
    dispatch
  ] = useReducer(searchNotesReducer, {
    notes: [...initialNotes],
    filteredNotes: [...initialNotes],
    sinceQuery: null,
    untilQuery: null,
    tagsQuery: [],
    levelsQuery: new Set<number>(),
  });

  const setSinceQuery = useCallback((sinceQuery: Date | null) => {
    dispatch({ type: 'SEARCH_NOTES/SET_SINCE', sinceQuery: sinceQuery });
  }, []);

  const setUntilQuery = useCallback((untilQuery: Date | null) => {
    dispatch({ type: 'SEARCH_NOTES/SET_UNTIL', untilQuery: untilQuery });
  }, []);

  
  const setTagsQuery = useCallback((tags: Tag[]) => {
    dispatch({ type: 'SEARCH_NOTES/SET_TAGS_QUERY', tagsQuery: tags });
  }, []);

  const toggleTagsQuery = useCallback((tag: Tag) => {
    dispatch({ type: 'SEARCH_NOTES/TOGGLE_TAGS_QUERY', tag: tag });
  }, []);


  const setLevelsQuery = useCallback((levelsQuery: Set<number>) => {
    dispatch({ type: 'SEARCH_NOTES/SET_LEVELS_QUERY', levelsQuery: levelsQuery });
  }, []);
  
  const toggleLevelsQuery = useCallback((level: number) => {
    dispatch({ type: 'SEARCH_NOTES/TOGGLE_LEVELS_QUERY', level: level });
  }, []);

  useEffect(() => {
    (async () => {
      const allTags = await getAllTag();
      setTagsQuery(allTags);
    })();
  }, []);

  const clearAllConditions = useCallback(() => {
    setSinceQuery(null);
    setUntilQuery(null);
    setTagsQuery([]);
    setLevelsQuery(new Set());
  }, []);


  return {
    filteredNotes,
    sinceQuery,
    untilQuery,
    tagsQuery,
    levelsQuery,
    setSinceQuery,
    setUntilQuery,
    setTagsQuery,
    setLevelsQuery,
    toggleLevelsQuery,
    toggleTagsQuery,
    clearAllConditions,
  };
};
