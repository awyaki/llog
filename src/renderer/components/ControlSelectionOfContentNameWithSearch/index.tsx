import { 
  VFC,
  } from 'react';

import { CSSObject } from '@emotion/react';

import { SearchIcon } from '~/components';

import { colors, font } from '~/styleConfig';

import {
  motion,
  Variants,
} from 'framer-motion';



import { ContentNameWithId, useSearchByContentName } from './hooks';

export type { ContentNameWithId } from './hooks';

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
  'css' | 'toggleSelectedContentNames' | 'contentNames' | 'selectedContentNames'
  >;

type SearchQueryInputBoxProps = {
  css?: CSSObject;
  searchContentNameQuery: string;
  setSearchContentNameQuery: (query: string) => void;
};

const contentNameItemVariants: Variants = {
  selected: {
    borderLeftColor: colors.cyan.DEFAULT,
  },
  nonSelected: {
    borderLeftColor: colors.cyan.BACKGROUND,
  }
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
      initial={isSelected ? 'selected' : 'nonSelected'}
      animate={isSelected ? 'selected' : 'nonSelected'}
      style={{
        minWidth: '120px',
        borderLeftWidth: '8px',
        borderRightWidth: '8px',
        borderRightColor: colors.cyan.BACKGROUND,
        borderStyle: 'solid',
        padding: '8px',
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
    <div css={{
      display: 'flex',
      flexWrap: 'wrap',
    }} {...rest}>
      {contentNames.map((contentName) => {
        const isSelected = selectedContentNames.some(({ id }) => contentName.id === id);
        return (
          <ContentNameItem 
            key={contentName.id}
            css={{ marginBottom: '8px', marginRight: '8px' }}
            isSelected={isSelected}
            contentName={contentName}
            onToggleSelectedContentNames={() => toggleSelectedContentNames(contentName)}
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
    <div css={{
      display: 'flex', 
      alignItems: 'flex-end', 
      marginBottom: '16px'
    }} {...rest}>
      <input 
        css={{
          width: '200px',
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: '4px',
        }}
        value={searchContentNameQuery}
        onChange={(e) => setSearchContentNameQuery(e.target.value)}
        type="text" />
      <SearchIcon />
    </div>
  );
};


export const ControlSelectionOfContentNameWithSearch: VFC<ControlSelectionOfContentNameWithSearchProps> = ({
  contentNames,
  selectedContentNames,
  setSelectedContentNames,
  toggleSelectedContentNames,
  ...rest
}) => {

  const { 
    filteredContentNames, 
    searchContentNameQuery,
    setSearchContentNameQuery
    } = useSearchByContentName({ contentNames });

  return (
    <div {...rest}>
      <h2 css={{ marginBottom: '4px' }}>Contents</h2>
      <SearchQueryInputBox 
        css={{ marginBottom: '16px' }}
        searchContentNameQuery={searchContentNameQuery}
        setSearchContentNameQuery={setSearchContentNameQuery}
      />
      <ContentNameItemList
        css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
          marginBottom: '32px',
        }}
        contentNames={filteredContentNames}
        selectedContentNames={selectedContentNames}
        toggleSelectedContentNames={toggleSelectedContentNames}
      />
    </div>
  );
};
