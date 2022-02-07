import {
  Reducer
} from 'react';

import { createNGramTokenMap } from '~/utils';

import { LogWithRelation } from '~/pages/type';

type State = {
  titleQuery: string;
  titlesTokenMap: ReturnType<typeof createNGramTokenMap>;
  logs: LogWithRelation[];
  sinceQuery: Date | null;
  untilQuery: Date | null;
  filteredLogs: LogWithRelation[];
};

type Action = {
  type: 'SEARCH_LOGS/SET_LOGS';
  logs: LogWithRelation[];
} | {
  type: 'SEARCH_LOGS/SET_SINCE';
  sinceQuery: Date | null;
} | {
  type: 'SEARCH_LOGS/SET_UNTIL';
  untilQuery: Date | null;
} | {
  type: 'SEARCH_LOGS/SET_TITLE_QUERY';
  titleQuery: string;
};


const sinceFilter = (base: Date, compered: Date) => {
  return base.getTime() <= compered.getTime();
};

const untilFilter = (base: Date, compered: Date) => {
  return base.getTime() >= compered.getTime();
};

type DateFilterArguments = {
  logs: LogWithRelation[];
  dateQuery: Date | null;
  filter: (base: Date, compered: Date) => boolean;
};

const dateFilter = ({
  logs,
  dateQuery,
  filter
}: DateFilterArguments) => {
  return dateQuery === null
          ? logs
          : logs.filter(({ createdAt }) => filter(dateQuery, createdAt));
};

type TitleFilerArguments = {
  logs: LogWithRelation[];
  titleQuery: string;
  idSet: Set<number>;
};

const titleFilter = ({
  logs,
  titleQuery,
  idSet
}: TitleFilerArguments) => {
  return titleQuery === ''
          ? logs
          : logs.filter(({ id }) => idSet.has(id));
};


type FilterByAllQueriesArguments = Omit<State, 'filteredLogs'>;

const filterByAllQueries = ({
  logs,
  sinceQuery,
  untilQuery,
  titleQuery,
  titlesTokenMap,
}: FilterByAllQueriesArguments) => {

    const idSetForTitleQuery = titlesTokenMap.get(titleQuery) ?? new Set();
      
    const filteredBySince = dateFilter({ 
                              logs, 
                              dateQuery: sinceQuery,
                              filter: sinceFilter });

    const filteredBySinceAndUntil = dateFilter({ 
                                      logs: filteredBySince, 
                                      dateQuery: untilQuery, 
                                      filter: untilFilter });

    const filteredBySinceAndUntilAndTitle = titleFilter({ 
                                            logs: filteredBySinceAndUntil, 
                                            titleQuery, 
                                            idSet: idSetForTitleQuery })

    return filteredBySinceAndUntilAndTitle;
};




export const searchLogsReducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'SEARCH_LOGS/SET_LOGS': {
      const nextState = { ...state };
      nextState.logs = action.logs;
      nextState.filteredLogs = action.logs;
      nextState.titlesTokenMap = createNGramTokenMap(action.logs.map(({ id, title }) => ({ id, text: title })))
      return nextState;
    }
    case 'SEARCH_LOGS/SET_SINCE': {
      const nextState = { ...state };

      const { sinceQuery: nextSinceQuery } = action;
      const { logs, titleQuery, titlesTokenMap, untilQuery } = state;
      

      nextState.filteredLogs = filterByAllQueries({
        logs: logs,
        titleQuery: titleQuery,
        titlesTokenMap: titlesTokenMap,
        sinceQuery: nextSinceQuery,
        untilQuery: untilQuery,
      });

      nextState.sinceQuery = nextSinceQuery;

      return nextState; 
    }
  
    case 'SEARCH_LOGS/SET_UNTIL': {
      const nextState = { ...state };
      const { untilQuery: nextUntilQuery } = action;
      const { logs, titleQuery, titlesTokenMap, sinceQuery } = state; 

      nextState.filteredLogs = filterByAllQueries({
        logs: logs,
        titleQuery: titleQuery,
        titlesTokenMap: titlesTokenMap,
        sinceQuery: sinceQuery,
        untilQuery: nextUntilQuery 
      });

      nextState.untilQuery = nextUntilQuery;

      return nextState; 
    }

    case 'SEARCH_LOGS/SET_TITLE_QUERY': {
      const nextState = { ...state };
      const { titleQuery: nextTitleQuery } = action; 
      const { logs, titlesTokenMap, sinceQuery, untilQuery} = state;  

      nextState.filteredLogs = filterByAllQueries({
        logs: logs,
        titleQuery: nextTitleQuery,
        titlesTokenMap: titlesTokenMap,
        sinceQuery: sinceQuery,
        untilQuery: untilQuery,
      });
      nextState.titleQuery = nextTitleQuery;

      return nextState;
    }

    default:
      return state;
  }
};








