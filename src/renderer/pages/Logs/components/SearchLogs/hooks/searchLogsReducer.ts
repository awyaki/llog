import { Reducer } from "react";

import { Tag } from "@prisma/client";

import { createNGramTokenMap } from "~/utils";

import { LogWithRelation } from "~/pages/type";

import { ContentNameWithId } from "~/components";

type State = {
  titleQuery: string;
  titlesTokenMap: ReturnType<typeof createNGramTokenMap>;
  tagsQuery: Tag[];
  sinceQuery: Date | null;
  untilQuery: Date | null;
  levelsQuery: Set<number>;
  contentNameQuery: ContentNameWithId[];
  logs: LogWithRelation[];
  filteredLogs: LogWithRelation[];
};

type Action =
  | {
      type: "SEARCH_LOGS/SET_LOGS";
      logs: LogWithRelation[];
    }
  | {
      type: "SEARCH_LOGS/SET_SINCE";
      sinceQuery: Date | null;
    }
  | {
      type: "SEARCH_LOGS/SET_UNTIL";
      untilQuery: Date | null;
    }
  | {
      type: "SEARCH_LOGS/SET_TITLE_QUERY";
      titleQuery: string;
    }
  | {
      type: "SEARCH_LOGS/TOGGLE_TAGS_QUERY";
      tag: Tag;
    }
  | {
      type: "SEARCH_LOGS/SET_TAGS_QUERY";
      tagsQuery: Tag[];
    }
  | {
      type: "SEARCH_LOGS/SET_LEVELS_QUERY";
      levelsQuery: Set<number>;
    }
  | {
      type: "SEARCH_LOGS/TOGGLE_LEVELS_QUERY";
      level: number;
    }
  | {
      type: "SEARCH_LOGS/SET_CONTENT_NAME_QUERY";
      contentNameQuery: ContentNameWithId[];
    }
  | {
      type: "SEARCH_LOGS/TOGGLE_CONTENT_NAME_QUERY";
      contentNameWithId: ContentNameWithId;
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

const dateFilter = ({ logs, dateQuery, filter }: DateFilterArguments) => {
  return dateQuery === null
    ? logs
    : logs.filter(({ createdAt }) => filter(dateQuery, createdAt));
};

type TitleFilerArguments = {
  logs: LogWithRelation[];
  titleQuery: string;
  idSet: Set<number>;
};

const titleFilter = ({ logs, titleQuery, idSet }: TitleFilerArguments) => {
  return titleQuery === "" ? logs : logs.filter(({ id }) => idSet.has(id));
};

type TagsFilterArguments = Pick<State, "logs" | "tagsQuery">;

const tagsFilter = ({ logs, tagsQuery }: TagsFilterArguments) => {
  const tagsQueryIdSet = new Set(tagsQuery.map(({ id }) => id));

  return tagsQuery.length === 0
    ? logs
    : logs.filter(({ tags }) => tags.some(({ id }) => tagsQueryIdSet.has(id)));
};

type LevelsFilterArguments = Pick<State, "logs" | "levelsQuery">;

const levelsFilter = ({ logs, levelsQuery }: LevelsFilterArguments) => {
  return levelsQuery.size === 0
    ? logs
    : logs.filter(({ blocks }) =>
        blocks.some(({ level }) => levelsQuery.has(level)),
      );
};

type ContentNameFilterArguments = Pick<State, "logs" | "contentNameQuery">;

const contentNameFilter = ({
  logs,
  contentNameQuery,
}: ContentNameFilterArguments) => {
  return contentNameQuery.length === 0
    ? logs
    : logs.filter(({ contentId }) => {
        if (contentId === null) return false;
        return contentNameQuery.some(({ id }) => contentId === id);
      });
};

type FilterByAllQueriesArguments = Omit<State, "filteredLogs">;

const filterByAllQueries = ({
  logs,
  sinceQuery,
  untilQuery,
  titleQuery,
  titlesTokenMap,
  tagsQuery,
  levelsQuery,
  contentNameQuery,
}: FilterByAllQueriesArguments) => {
  const idSetForTitleQuery = titlesTokenMap.get(titleQuery) ?? new Set();

  const filteredBySince = dateFilter({
    logs,
    dateQuery: sinceQuery,
    filter: sinceFilter,
  });

  const filteredBySinceAndUntil = dateFilter({
    logs: filteredBySince,
    dateQuery: untilQuery,
    filter: untilFilter,
  });

  const filteredBySinceAndUntilAndTitle = titleFilter({
    logs: filteredBySinceAndUntil,
    titleQuery,
    idSet: idSetForTitleQuery,
  });

  const filteredBySinceAndUntilAndTitleAndTags = tagsFilter({
    logs: filteredBySinceAndUntilAndTitle,
    tagsQuery: tagsQuery,
  });

  const filteredBySinceAndUntilAndTitleAndTagsAndLevels = levelsFilter({
    logs: filteredBySinceAndUntilAndTitleAndTags,
    levelsQuery: levelsQuery,
  });

  const filteredBySinceAndUntilAndTitleAndTagsAndLevelsAndContentName =
    contentNameFilter({
      logs: filteredBySinceAndUntilAndTitleAndTagsAndLevels,
      contentNameQuery: contentNameQuery,
    });

  return filteredBySinceAndUntilAndTitleAndTagsAndLevelsAndContentName;
};

export const searchLogsReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "SEARCH_LOGS/SET_LOGS": {
      const nextState = { ...state };
      nextState.logs = action.logs;
      nextState.filteredLogs = action.logs;
      nextState.titlesTokenMap = createNGramTokenMap(
        action.logs.map(({ id, title }) => ({ id, text: title })),
      );
      return nextState;
    }
    case "SEARCH_LOGS/SET_SINCE": {
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

    case "SEARCH_LOGS/SET_UNTIL": {
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

    case "SEARCH_LOGS/SET_TITLE_QUERY": {
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

    case "SEARCH_LOGS/SET_TAGS_QUERY": {
      const nextState = { ...state };
      const { tagsQuery: nextTagsQuery } = action;

      const { tagsQuery, filteredLogs, ...rest } = state;
      nextState.filteredLogs = filterByAllQueries({
        tagsQuery: nextTagsQuery,
        ...rest,
      });
      nextState.tagsQuery = nextTagsQuery;

      return nextState;
    }

    case "SEARCH_LOGS/TOGGLE_TAGS_QUERY": {
      const nextState = { ...state };
      const { tag } = action;
      const { tagsQuery, filteredLogs, ...rest } = state;

      const nextTagsQuery = (() => {
        const index = tagsQuery.findIndex(({ id }) => id === tag.id);
        return index === -1
          ? tagsQuery.concat({ ...tag })
          : tagsQuery.slice(0, index).concat(tagsQuery.slice(index + 1));
      })();

      nextState.filteredLogs = filterByAllQueries({
        tagsQuery: nextTagsQuery,
        ...rest,
      });

      nextState.tagsQuery = nextTagsQuery;

      return nextState;
    }

    case "SEARCH_LOGS/SET_LEVELS_QUERY": {
      const nextState = { ...state };
      const { levelsQuery, filteredLogs, ...rest } = state;

      const nextLevelsQuery = new Set(action.levelsQuery);

      nextState.levelsQuery = nextLevelsQuery;
      nextState.filteredLogs = filterByAllQueries({
        levelsQuery: nextLevelsQuery,
        ...rest,
      });

      return nextState;
    }

    case "SEARCH_LOGS/TOGGLE_LEVELS_QUERY": {
      const nextState = { ...state };
      const { levelsQuery, filteredLogs, ...rest } = state;

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
      nextState.filteredLogs = filterByAllQueries({
        levelsQuery: nextLevelsQuery,
        ...rest,
      });

      return nextState;
    }

    case "SEARCH_LOGS/SET_CONTENT_NAME_QUERY": {
      const nextState = { ...state };
      const { contentNameQuery, filteredLogs, ...rest } = state;
      const nextContentNameQuery = [...action.contentNameQuery];

      nextState.contentNameQuery = nextContentNameQuery;
      nextState.filteredLogs = filterByAllQueries({
        contentNameQuery: nextContentNameQuery,
        ...rest,
      });

      return nextState;
    }

    case "SEARCH_LOGS/TOGGLE_CONTENT_NAME_QUERY": {
      const nextState = { ...state };
      const { contentNameQuery, filteredLogs, ...rest } = state;

      const nextContentNameQuery = (() => {
        const index = contentNameQuery.findIndex(
          ({ id }) => id === action.contentNameWithId.id,
        );
        return index === -1
          ? contentNameQuery.concat({ ...action.contentNameWithId })
          : contentNameQuery
              .slice(0, index)
              .concat(contentNameQuery.slice(index + 1));
      })();

      nextState.contentNameQuery = nextContentNameQuery;
      nextState.filteredLogs = filterByAllQueries({
        contentNameQuery: nextContentNameQuery,
        ...rest,
      });

      return nextState;
    }

    default:
      return state;
  }
};
