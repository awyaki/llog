import { VFC, useCallback } from "react";

import { CSSObject } from "@emotion/react";

import { SearchIcon } from "~/components";

import { colors, font } from "~/styleConfig";

import { motion, Variants } from "framer-motion";

import { ContentNameWithId, useSearchByContentName } from "./hooks";

export type { ContentNameWithId } from "./hooks";

type ControlSelectionOfContentNameWithSearchProps = {
  css?: CSSObject;
  contentNames: ContentNameWithId[];
  selectedContentNames: ContentNameWithId[];
  setSelectedContentNames: (contentNames: ContentNameWithId[]) => void;
  toggleSelectedContentNames: (contentName: ContentNameWithId) => void;
};

type ContentNameItemProps = {
  css?: CSSObject;
  isSelected: boolean;
  contentName: ContentNameWithId;
  onToggleSelectedContentNames: () => void;
};

type ContentNameItemListProps = Pick<
  ControlSelectionOfContentNameWithSearchProps,
  "css" | "toggleSelectedContentNames" | "contentNames" | "selectedContentNames"
>;

type SearchQueryInputBoxProps = {
  css?: CSSObject;
  searchContentNameQuery: string;
  setSearchContentNameQuery: (query: string) => void;
};

type ClearSelectionButtonProps = {
  css?: CSSObject;
  clearSelection: () => void;
};

const contentNameItemVariants: Variants = {
  selected: {
    borderLeftColor: colors.cyan.DEFAULT,
  },
  nonSelected: {
    borderLeftColor: colors.cyan.BACKGROUND,
  },
};

const ContentNameItem: VFC<ContentNameItemProps> = ({
  isSelected,
  contentName,
  onToggleSelectedContentNames,
  ...rest
}) => {
  return (
    <motion.button
      variants={contentNameItemVariants}
      initial={isSelected ? "selected" : "nonSelected"}
      animate={isSelected ? "selected" : "nonSelected"}
      style={{
        minWidth: "120px",
        borderLeftWidth: "8px",
        borderRightWidth: "8px",
        borderRightColor: colors.cyan.BACKGROUND,
        borderStyle: "solid",
        padding: "8px",
        backgroundColor: colors.cyan.BACKGROUND,
        fontSize: font.size.S,
        color: colors.text,
      }}
      onClick={onToggleSelectedContentNames}
      {...rest}
    >
      {contentName.contentName}
    </motion.button>
  );
};

const ContentNameItemList: VFC<ContentNameItemListProps> = ({
  contentNames,
  selectedContentNames,
  toggleSelectedContentNames,
  ...rest
}) => {
  return (
    <div
      css={{
        display: "flex",
        flexWrap: "wrap",
      }}
      {...rest}
    >
      {contentNames.map((contentName) => {
        const isSelected = selectedContentNames.some(
          ({ id }) => contentName.id === id,
        );
        return (
          <ContentNameItem
            key={contentName.id}
            css={{ marginBottom: "8px", marginRight: "8px" }}
            isSelected={isSelected}
            contentName={contentName}
            onToggleSelectedContentNames={() =>
              toggleSelectedContentNames(contentName)
            }
          />
        );
      })}
    </div>
  );
};

const SearchQueryInputBox: VFC<SearchQueryInputBoxProps> = ({
  searchContentNameQuery,
  setSearchContentNameQuery,
  ...rest
}) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "flex-end",
        marginBottom: "16px",
      }}
      {...rest}
    >
      <input
        css={{
          width: "200px",
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: "4px",
        }}
        value={searchContentNameQuery}
        onChange={(e) => setSearchContentNameQuery(e.target.value)}
        type="text"
      />
      <SearchIcon />
    </div>
  );
};

const ClearSelectionButton: VFC<ClearSelectionButtonProps> = ({
  clearSelection,
  ...rest
}) => {
  return (
    <button
      css={{
        minWidth: "80px",
        textAlign: "center",
        fontSize: font.size.SS,
        borderRadius: "4px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors.red.DEFAULT,
        backgroundColor: colors.red.DEFAULT,
        color: colors.white,
        padding: "2px 4px",
      }}
      onClick={clearSelection}
      {...rest}
    >
      Clear
    </button>
  );
};

export const ControlSelectionOfContentNameWithSearch: VFC<
  ControlSelectionOfContentNameWithSearchProps
> = ({
  contentNames,
  selectedContentNames,
  setSelectedContentNames,
  toggleSelectedContentNames,
  ...rest
}) => {
  const {
    filteredContentNames,
    searchContentNameQuery,
    setSearchContentNameQuery,
  } = useSearchByContentName({ contentNames });

  const clearSelection = useCallback(() => {
    setSelectedContentNames([]);
  }, []);

  return (
    <div {...rest}>
      <h2 css={{ marginBottom: "8px" }}>Contents</h2>
      <ClearSelectionButton
        css={{ marginBottom: "8px" }}
        clearSelection={clearSelection}
      />
      <SearchQueryInputBox
        css={{ marginBottom: "16px" }}
        searchContentNameQuery={searchContentNameQuery}
        setSearchContentNameQuery={setSearchContentNameQuery}
      />
      <ContentNameItemList
        contentNames={filteredContentNames}
        selectedContentNames={selectedContentNames}
        toggleSelectedContentNames={toggleSelectedContentNames}
      />
    </div>
  );
};
