import { 
  VFC, 
  useContext,
  ChangeEventHandler
  } from 'react';

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
};

export const CollapseToSelectTags: VFC<Props> = ({ 
  searchQuery,
  onChangeSearchQuery,
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
          onChangeSearchQuery={onChangeSearchQuery} />
        <TagListToSelect 
          searchQuery={searchQuery} />
      </div>
    </Collapse>
  );
};
