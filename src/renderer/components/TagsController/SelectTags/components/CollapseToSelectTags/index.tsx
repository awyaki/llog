import {
  VFC, 
  useContext,
  Dispatch,
  SetStateAction,
  ChangeEventHandler
  } from 'react';

import { Tag } from '@prisma/client';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { Collapse } from '@chakra-ui/transition';

import { SearchAndCreateInput } from '../SearchAndCreateInput';

import { TagListToSelect } from '../TagListToSelect';

import { SelectTagsContext } from '../SelectTagsContextProvider';

type Props = {
  css?: CSSObject;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedTags: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  onToggleSelectedTags: (tag: Tag) => () => void;
};

export const CollapseToSelectTags: VFC<Props> = ({ 
  searchQuery,
  setSearchQuery,
  onChangeSearchQuery,
  selectedTags,
  setSelectedTags,
  onToggleSelectedTags,
  ...rest }) => {
  const { isOpen } = useContext(SelectTagsContext);

  return (
    <Collapse in={isOpen} {...rest}>
      <div css={{
        padding: '16px',
        border: `1px solid ${colors.cyan.DEFAULT}`,
        borderRadius: '4px',
        marginBottom: '16px',
      }}>
        <h2 css={{ marginBottom: '8px' }}>Search or Create tags</h2>
        <SearchAndCreateInput 
          setSelectedTags={setSelectedTags}
          setSearchQuery={setSearchQuery}
          onChangeSearchQuery={onChangeSearchQuery} />
        <TagListToSelect 
          onToggleSelectedTags={onToggleSelectedTags}
          selectedTags={selectedTags}
          searchQuery={searchQuery} />
      </div>
    </Collapse>
  );
};
