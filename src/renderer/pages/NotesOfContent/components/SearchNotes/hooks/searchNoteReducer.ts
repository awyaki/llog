import {
  Reducer
} from 'react';


import { Tag } from '@prisma/client';


import { NoteWithRelation } from '~/pages/type';

export type SearchNotesState = {
  tagsQuery: Tag[];
  sinceQuery: Date | null;
  untilQuery: Date | null;
  levelsQuery: Set<number>;
  notes: NoteWithRelation[];
  filteredNotes: NoteWithRelation[];
};

export type SearchNotesAction = {
  type: 'SEARCH_NOTES/SET_NOTES';
  notes: NoteWithRelation[];
} | {
  type: 'SEARCH_NOTES/SET_SINCE';
  sinceQuery: Date | null;
} | {
  type: 'SEARCH_NOTES/SET_UNTIL';
  untilQuery: Date | null;
} | {
  type: 'SEARCH_NOTES/TOGGLE_TAGS_QUERY';
  tag: Tag;
} | {
  type: 'SEARCH_NOTES/SET_TAGS_QUERY';
  tagsQuery: Tag[];
} | {
  type: 'SEARCH_NOTES/SET_LEVELS_QUERY';
  levelsQuery: Set<number>;
} | {
  type: 'SEARCH_NOTES/TOGGLE_LEVELS_QUERY';
  level: number;
};


const sinceFilter = (base: Date, compered: Date) => {
  return base.getTime() <= compered.getTime();
};

const untilFilter = (base: Date, compered: Date) => {
  return base.getTime() >= compered.getTime();
};

type DateFilterArguments = {
  notes: NoteWithRelation[];
  dateQuery: Date | null;
  filter: (base: Date, compered: Date) => boolean;
};

const dateFilter = ({
  notes,
  dateQuery,
  filter
}: DateFilterArguments) => {
  return dateQuery === null
          ? notes
          : notes.filter(({ createdAt }) => filter(dateQuery, createdAt));
};


type TagsFilterArguments = Pick<SearchNotesState, 'notes' | 'tagsQuery'>;

const tagsFilter = ({
  notes,
  tagsQuery,
}: TagsFilterArguments) => {
  const tagsQueryIdSet = new Set(tagsQuery.map(({ id }) => id));

  return tagsQuery.length === 0
          ? notes 
          : notes.filter(({ tags }) => tags.some(({ id }) => tagsQueryIdSet.has(id)));
};

type LevelsFilterArguments = Pick<SearchNotesState, 'notes' | 'levelsQuery'>;

const levelsFilter = ({
  notes,
  levelsQuery
}: LevelsFilterArguments) => {
  return levelsQuery.size === 0
          ? notes
          : notes.filter(({ blocks }) => blocks.some(({ level }) => levelsQuery.has(level)));
};

type FilterByAllQueriesArguments = Omit<SearchNotesState, 'filteredNotes'>;

const filterByAllQueries = ({
  notes,
  sinceQuery,
  untilQuery,
  tagsQuery,
  levelsQuery,
}: FilterByAllQueriesArguments) => {

      
    const filteredBySince = dateFilter({ 
                              notes, 
                              dateQuery: sinceQuery,
                              filter: sinceFilter });

    const filteredBySinceAndUntil = dateFilter({ 
                                      notes: filteredBySince, 
                                      dateQuery: untilQuery, 
                                      filter: untilFilter });


    const filteredBySinceAndUntilAndTags = tagsFilter({
      notes: filteredBySinceAndUntil,
      tagsQuery: tagsQuery,
    });

    const filteredBySinceAndUntilAndTagsAndLevels = levelsFilter({
      notes: filteredBySinceAndUntilAndTags,
      levelsQuery: levelsQuery,
    });
    

    return filteredBySinceAndUntilAndTagsAndLevels;
};




export const searchNotesReducer: Reducer<SearchNotesState, SearchNotesAction> = (state, action) => {
  switch(action.type) {
    case 'SEARCH_NOTES/SET_NOTES': {
      const nextState = { ...state };
      nextState.notes = [...action.notes];
      nextState.filteredNotes = [...action.notes];
      return nextState;
    }
    case 'SEARCH_NOTES/SET_SINCE': {
      const nextState = { ...state };

      const { sinceQuery: nextSinceQuery } = action;
      const { sinceQuery, filteredNotes, ...rest } = state;
      

      nextState.filteredNotes = filterByAllQueries({
        sinceQuery: nextSinceQuery,
        ...rest,
      });

      nextState.sinceQuery = nextSinceQuery;

      return nextState; 
    }
  
    case 'SEARCH_NOTES/SET_UNTIL': {
      const nextState = { ...state };
      const { untilQuery: nextUntilQuery } = action;
      const { untilQuery, filteredNotes, ...rest } = state; 

      nextState.filteredNotes = filterByAllQueries({
        untilQuery: nextUntilQuery,
        ...rest,
      });

      nextState.untilQuery = nextUntilQuery;

      return nextState; 
    }

    
    case 'SEARCH_NOTES/SET_TAGS_QUERY': {
      const nextState = { ...state };
      const { tagsQuery: nextTagsQuery} = action;
      
      const { tagsQuery, filteredNotes, ...rest } = state;
      nextState.filteredNotes = filterByAllQueries({
        tagsQuery: nextTagsQuery,
        ...rest
      });
      nextState.tagsQuery = nextTagsQuery;

      return nextState;
    }

    case 'SEARCH_NOTES/TOGGLE_TAGS_QUERY': {
      const nextState = { ...state };
      const { tag } = action;
      const { tagsQuery, filteredNotes, ...rest } = state; 

      const nextTagsQuery = (() => {
        const index = tagsQuery.findIndex(({ id }) => id === tag.id);
        return index === -1
                ? tagsQuery.concat({ ...tag })
                : tagsQuery.slice(0, index)
                            .concat(tagsQuery.slice(index + 1));
      })();

      nextState.filteredNotes = filterByAllQueries({
        tagsQuery: nextTagsQuery,
        ...rest,
      });

      nextState.tagsQuery = nextTagsQuery;

      return nextState;
    }
    
    case 'SEARCH_NOTES/SET_LEVELS_QUERY': {
      const nextState = { ...state };
      const { levelsQuery, filteredNotes, ...rest } = state;
      
      const nextLevelsQuery = new Set(action.levelsQuery);

      nextState.levelsQuery = nextLevelsQuery;
      nextState.filteredNotes = filterByAllQueries({
        levelsQuery: nextLevelsQuery,
        ...rest
      });

      return nextState;
    }
    
    case 'SEARCH_NOTES/TOGGLE_LEVELS_QUERY': {
      const nextState = { ...state };
      const { levelsQuery, filteredNotes, ...rest } = state;
      
      const nextLevelsQuery = (() => {
        if (state.levelsQuery.has(action.level)) {
          const nextLevelsQuery = new Set(state.levelsQuery);
          nextLevelsQuery.delete(action.level);
          return nextLevelsQuery;
        } else {
          const nextLevelsQuery = new Set(state.levelsQuery);
          nextLevelsQuery.add(action.level);
          return nextLevelsQuery;
        }
      })();

      nextState.levelsQuery = nextLevelsQuery;
      nextState.filteredNotes = filterByAllQueries({
        levelsQuery: nextLevelsQuery,
        ...rest
      });

      return nextState;
    }

    
    default:
      return state;
  }
};


