import { 
  useReducer, 
  useCallback,
  useEffect,
} from 'react';

import { searchLogsReducer } from './searchLogsReducer';

import { LogWithRelation } from '~/pages/type';


export const useSearchLogs = (initialLogs: LogWithRelation[]) => {
  const [{ titleQuery, sinceQuery, untilQuery, filteredLogs }, dispatch ] = useReducer(searchLogsReducer, {
    logs: [],
    titleQuery: '',
    titlesTokenMap: new Map(),
    sinceQuery: null,
    untilQuery: null,
    filteredLogs: [],
  });
  

  const setSinceQuery = useCallback((sinceQuery: Date | null) => {
    dispatch({ type: 'SEARCH_LOGS/SET_SINCE', sinceQuery: sinceQuery });
  }, []);

  const setUntilQuery = useCallback((untilQuery: Date | null) => {
    dispatch({ type: 'SEARCH_LOGS/SET_UNTIL', untilQuery: untilQuery });
  }, []);

  const setTitleQuery = useCallback((titleQuery: string) => {
    dispatch({ type: 'SEARCH_LOGS/SET_TITLE_QUERY', titleQuery: titleQuery });
  }, []);

  const setLogsOnSearchLogs = useCallback((logs: LogWithRelation[]) => {
    dispatch({ type: 'SEARCH_LOGS/SET_LOGS', logs: logs });
  }, []);

  useEffect(() => {
    setLogsOnSearchLogs(initialLogs);
  }, [initialLogs]);
  
  return {
    titleQuery,
    setTitleQuery,
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
    filteredLogs
  };


};
