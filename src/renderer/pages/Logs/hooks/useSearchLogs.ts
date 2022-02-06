import { 
  useReducer, 
  useCallback,
  useEffect,
} from 'react';

import { searchLogsReducer } from './searchLogsReducer';

import { LogWithRelation } from '~/pages/type';


export const useSearchLogs = (initialLogs: LogWithRelation[]) => {
  const [{ sinceQuery, filteredLogs }, dispatch ] = useReducer(searchLogsReducer, {
    logs: [],
    sinceQuery: null,
    filteredLogs: [],
  });
  

  const setSinceQuery = useCallback((sinceQuery: Date | null) => {
    dispatch({ type: 'SEARCH_LOGS/SET_SINCE', sinceQuery: sinceQuery });
  }, []);

  const setLogsOnSearchLogs = useCallback((logs: LogWithRelation[]) => {
    dispatch({ type: 'SEARCH_LOGS/SET_LOGS', logs: logs });
  }, []);

  useEffect(() => {
    setLogsOnSearchLogs(initialLogs);
  }, [initialLogs]);
  
  return {
    sinceQuery,
    setSinceQuery,
    filteredLogs
  };


};
