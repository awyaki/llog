import { 
  useReducer, 
  useCallback,
  useEffect,
  useState,
} from 'react';

import { getAllTag } from '~/api';

import { Tag } from '@prisma/client';

import { searchLogsReducer } from './searchLogsReducer';

import { LogWithRelation } from '~/pages/type';


export const useSearchLogs = (initialLogs: LogWithRelation[]) => {
  const [{ titleQuery, sinceQuery, untilQuery, tagsQuery, levelsQuery, filteredLogs }, dispatch ] = useReducer(searchLogsReducer, {
    logs: [],
    titleQuery: '',
    titlesTokenMap: new Map<string, Set<number>>(),
    tagsQuery: [],
    sinceQuery: null,
    untilQuery: null,
    levelsQuery: new Set<number>(),
    filteredLogs: [],
  });
  
  const [tags, setTags] = useState<Tag[] | null>(null);

  const setSinceQuery = useCallback((sinceQuery: Date | null) => {
    dispatch({ type: 'SEARCH_LOGS/SET_SINCE', sinceQuery: sinceQuery });
  }, []);

  const setUntilQuery = useCallback((untilQuery: Date | null) => {
    dispatch({ type: 'SEARCH_LOGS/SET_UNTIL', untilQuery: untilQuery });
  }, []);

  const setTitleQuery = useCallback((titleQuery: string) => {
    dispatch({ type: 'SEARCH_LOGS/SET_TITLE_QUERY', titleQuery: titleQuery });
  }, []);
  
  
  const setTagsQuery = useCallback((tags: Tag[]) => {
    dispatch({ type: 'SEARCH_LOGS/SET_TAGS_QUERY', tagsQuery: tags });
  }, []);

  const toggleTagsQuery = useCallback((tag: Tag) => {
    dispatch({ type: 'SEARCH_LOGS/TOGGLE_TAGS_QUERY', tag: tag });
  }, []);

  const setLogsOnSearchLogs = useCallback((logs: LogWithRelation[]) => {
    dispatch({ type: 'SEARCH_LOGS/SET_LOGS', logs: logs });
  }, []);
  
  const setLevelsQuery = useCallback((levelsQuery: Set<number>) => {
    dispatch({ type: 'SEARCH_LOGS/SET_LEVELS_QUERY', levelsQuery: levelsQuery });
  }, []);
  
  const toggleLevelsQuery = useCallback((level: number) => {
    dispatch({ type: 'SEARCH_LOGS/TOGGLE_LEVELS_QUERY', level: level });
  }, []);

  useEffect(() => {
    setLogsOnSearchLogs(initialLogs);
  }, [initialLogs]);
  
  useEffect(() => {
    (async () => {
      const allTags = await getAllTag();
      setTags(allTags);
    })();
  }, []);
  return {
    titleQuery,
    setTitleQuery,
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
    tags,
    tagsQuery,
    setTagsQuery,
    toggleTagsQuery,
    setLevelsQuery,
    levelsQuery,
    toggleLevelsQuery,
    filteredLogs
  };


};
