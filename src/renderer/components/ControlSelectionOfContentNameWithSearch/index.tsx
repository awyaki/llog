import { 
  VFC,
  } from 'react';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

import {
  motion,
  Variants,
} from 'framer-motion';

import { ContentNameWithId, useSearchByContentName } from './hooks';

type ControlSelectionOfContentNameWithSearchProps = {
  css?: CSSObject; 
  contentNames: ContentNameWithId[]; 
  selectedContentNames: ContentNameWithId[];
  setSelectedContentNames: (contentNames: ContentNameWithId[]) => void;
  toggleSelectedContentNames: (contentName: ContentNameWithId) => void;
};

type ContentNameItemProps = {
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

};


const ContentNameItem: VFC<ContentNameItemProps> = ({
  isSelected,
  contentName,
  onToggleSelectedContentNames,
  ...rest
}) => {
  return (
    <motion.button 
      style={{
        width: '100%',
        borderLeftWidth: '8px',
        borderStyle: 'solid',
        padding: '16px',
        backgroundColor: colors.cyan.BACKGROUND,
        borderColor: colors.cyan.DEFAULT,
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
    <div {...rest}>
      {contentNames.map((contentName) => {
        const isSelected = selectedContentNames.some(({ id }) => contentName.id === id);
        return (
          <ContentNameItem 
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
    <input 
      css={{
        width: '200px',
        borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
      }}
      value={searchContentNameQuery}
      onChange={(e) => setSearchContentNameQuery(e.target.value)}
      type="text"
    {...rest} />
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
        css={{ marginBottom: '8px' }}
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
