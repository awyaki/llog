import { VFC, useCallback, forwardRef, useEffect } from "react";

import { Collapse } from "@chakra-ui/react";

import { useSearchLogs } from "./hooks";

import { LogWithRelation } from "~/pages/type";

import { TitleInput, DateInputs } from "~/components/UserInputInterfaces";

import {
  ControlTagSelectionWithSearch,
  ControlSelectionOfBlockLevels,
  ControlSelectionOfContentNameWithSearch,
  WarningButton,
} from "~/components";

import "react-datepicker/dist/react-datepicker.css";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

type SearchLogsProps = {
  css?: CSSObject;
  isOpen: boolean;
  logs: LogWithRelation[];
  setFilteredLogs: (logs: LogWithRelation[]) => void;
};

export const SearchLogs: VFC<SearchLogsProps> = ({
  isOpen,
  logs,
  setFilteredLogs,
  ...rest
}) => {
  const {
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
    contentNames,
    contentNameQuery,
    setContentNameQuery,
    toggleContentNameQuery,
    clearAllConditions,
    filteredLogs,
  } = useSearchLogs(logs);

  useEffect(() => {
    setFilteredLogs(filteredLogs);
  }, [filteredLogs]);

  return (
    <Collapse in={isOpen}>
      <div
        css={{
          padding: "16px",
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: "4px",
          marginBottom: "32px",
        }}
        {...rest}
      >
        <TitleInput
          css={{ marginBottom: "16px" }}
          titleQuery={titleQuery}
          setTitleQuery={setTitleQuery}
        />
        <DateInputs
          css={{ marginBottom: "32px" }}
          sinceQuery={sinceQuery}
          setSinceQuery={setSinceQuery}
          untilQuery={untilQuery}
          setUntilQuery={setUntilQuery}
        />
        {contentNames !== null ? (
          <ControlSelectionOfContentNameWithSearch
            contentNames={contentNames}
            selectedContentNames={contentNameQuery}
            setSelectedContentNames={setContentNameQuery}
            toggleSelectedContentNames={toggleContentNameQuery}
          />
        ) : undefined}
        {tags !== null ? (
          <ControlTagSelectionWithSearch
            css={{ marginBottom: "16px" }}
            tags={tags}
            selectedTags={tagsQuery}
            onToggleSelectedTags={toggleTagsQuery}
            onSetSelectedTags={setTagsQuery}
          />
        ) : undefined}
        <ControlSelectionOfBlockLevels
          css={{ marginBottom: "32px" }}
          selectedLevels={levelsQuery}
          onSetSelectedLevels={setLevelsQuery}
          onToggleSelectedLevels={toggleLevelsQuery}
        />
        <WarningButton onClick={clearAllConditions}>
          Clear all conditions
        </WarningButton>
      </div>
    </Collapse>
  );
};
