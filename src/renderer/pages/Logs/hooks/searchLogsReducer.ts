import {
  Reducer
} from 'react';

import { LogWithRelation } from '~/pages/type';

type State = {
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
};


const sinceFilter = (base: Date, compered: Date) => {
  return base.getTime() <= compered.getTime();
};

const untilFilter = (base: Date, compered: Date) => {
  return base.getTime() >= compered.getTime();
};

export const searchLogsReducer: Reducer<State, Action> = (state, action) => {
  switch(action.type) {
    case 'SEARCH_LOGS/SET_LOGS': {
      const nextState = { ...state };
      nextState.logs = action.logs;
      nextState.filteredLogs = action.logs;
      return nextState;
    }
    case 'SEARCH_LOGS/SET_SINCE': {
      const nextState = { ...state };
      const { sinceQuery: newSinceQuery } = action;

      const newFiltered = newSinceQuery !== null
                            ? state.logs
                              .filter(({ createdAt }) => sinceFilter(newSinceQuery, createdAt))
                            : state.logs;


      nextState.filteredLogs = newFiltered;
      nextState.sinceQuery = newSinceQuery;

      return nextState; 
    }
  
    case 'SEARCH_LOGS/SET_UNTIL': {
      const nextState = { ...state };
      const { untilQuery: newUntilQuery } = action;

      const newFiltered = newUntilQuery !== null
                            ? state.logs
                              .filter(({ createdAt }) => untilFilter(newUntilQuery, createdAt))
                            : state.logs;


      nextState.filteredLogs = newFiltered;
      nextState.untilQuery = newUntilQuery;

      return nextState; 
    }
    default:
      return state;
  }
};








