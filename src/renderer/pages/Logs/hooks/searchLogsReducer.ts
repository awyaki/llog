import {
  Reducer
} from 'react';

import { Tag } from '@prisma/client';

import { createNGramTokenMap } from '~/utils';

import { LogWithRelation } from '~/pages/type';


type State = {
  titleQuery: string;
  titlesTokenMap: ReturnType<typeof createNGramTokenMap>;
  tagsQuery: Tag[];
  sinceQuery: Date | null;
  untilQuery: Date | null;
  logs: LogWithRelation[];
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
} | {
  type: 'SEARCH_LOGS/TOGGLE_TAGS_QUERY';
  tag: Tag;
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


type TagsFilterArguments = Pick<State, 'logs' | 'tagsQuery'>;

const tagsFilter = ({
  logs,
  tagsQuery,
}: TagsFilterArguments) => {
  const tagsQueryIdSet = new Set(tagsQuery.map(({ id }) => id));

  return tagsQuery.length === 0
          ? logs 
          : logs.filter(({ tags }) => tags.some(({ id }) => tagsQueryIdSet.has(id)));
};


type FilterByAllQueriesArguments = Omit<State, 'filteredLogs'>;

const filterByAllQueries = ({
  logs,
  sinceQuery,
  untilQuery,
  titleQuery,
  titlesTokenMap,
  tagsQuery,
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

    const filteredBySinceAndUntilAndTitleAndTags = tagsFilter({
      logs: filteredBySinceAndUntilAndTitle,
      tagsQuery: tagsQuery,
    });
    return filteredBySinceAndUntilAndTitleAndTags;
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
      const { sinceQuery, filteredLogs, ...rest } = state;
      

      nextState.filteredLogs = filterByAllQueries({
        sinceQuery: nextSinceQuery,
        ...rest,
      });

      nextState.sinceQuery = nextSinceQuery;

      return nextState; 
    }
  
    case 'SEARCH_LOGS/SET_UNTIL': {
      const nextState = { ...state };
      const { untilQuery: nextUntilQuery } = action;
      const { untilQuery, filteredLogs, ...rest } = state; 

      nextState.filteredLogs = filterByAllQueries({
        untilQuery: nextUntilQuery,
        ...rest,
      });

      nextState.untilQuery = nextUntilQuery;

      return nextState; 
    }

    case 'SEARCH_LOGS/SET_TITLE_QUERY': {
      const nextState = { ...state };
      const { titleQuery: nextTitleQuery } = action; 
      const { titleQuery, filteredLogs, ...rest } = state;  

      nextState.filteredLogs = filterByAllQueries({
        titleQuery: nextTitleQuery,
        ...rest,
      });
      nextState.titleQuery = nextTitleQuery;

      return nextState;
    }
    
    case 'SEARCH_LOGS/TOGGLE_TAGS_QUERY': {
      const nextState = { ...state };
      const { tag } = action;
      const { tagsQuery, filteredLogs, ...rest } = state; 

      const nextTagsQuery = (() => {
        const index = tagsQuery.findIndex(({ id }) => id === tag.id);
        return index === -1
                ? tagsQuery.concat({ ...tag })
                : tagsQuery.slice(0, index)
                            .concat(tagsQuery.slice(index + 1));
      })();

      nextState.filteredLogs = filterByAllQueries({
        tagsQuery: nextTagsQuery,
        ...rest,
      });

      nextState.tagsQuery = nextTagsQuery;

      return nextState;
    }

    default:
      return state;
  }
};








