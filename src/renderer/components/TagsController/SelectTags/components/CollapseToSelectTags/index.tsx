import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { Collapse } from '@chakra-ui/transition';

import { SearchAndCreateInput } from '../SearchAndCreateInput';

import { TagListToSelect } from '../TagListToSelect';

type Props = {
  css?: CSSObject;
  isOpen: boolean;
};

export const CollapseToSelectTags: VFC<Props> = ({ isOpen, ...rest }) => {
  return (
    <Collapse in={isOpen} {...rest}>
      <div css={{
        padding: '16px',
        border: `1px solid ${colors.cyan.DEFAULT}`,
        borderRadius: '4px',
        marginBottom: '16px',
      }}>
        <h2 css={{ marginBottom: '8px' }}>Search or Create tags</h2>
        <SearchAndCreateInput />
        <TagListToSelect />
      </div>
    </Collapse>
  );
};
