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
  const [{ titleQuery, sinceQuery, untilQuery, tagsQuery, filteredLogs }, dispatch ] = useReducer(searchLogsReducer, {
    logs: [],
    titleQuery: '',
    titlesTokenMap: new Map<string, Set<number>>(),
    tagsQuery: [],
    sinceQuery: null,
    untilQuery: null,
    filteredLogs: [],
  });
  
  const [tags, setTags] = useState<Tag[]>([]);

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
    filteredLogs
  };


};
