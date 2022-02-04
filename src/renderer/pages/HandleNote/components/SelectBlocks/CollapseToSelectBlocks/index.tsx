import { 
  VFC, 
  useContext
  } from 'react';

import { Block } from '@prisma/client';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { Collapse } from '@chakra-ui/transition';

import { SelectBlocksList } from '../SelectBlocksList';


import { CollapseToSelectBlocksIsOpenContext } from '../CollapseToSelectBlocksIsOpenContextProvider';

type Props = {
  css?: CSSObject;
  blocks: Block[];
};

export const CollapseToSelectBlocks: VFC<Props> = ({ blocks, ...rest }) => {
  const { isOpen } = useContext(CollapseToSelectBlocksIsOpenContext);

  return (
    <Collapse in={isOpen} {...rest}>
      <div css={{
        padding: '16px',
        border: `1px solid ${colors.cyan.DEFAULT}`,
        borderRadius: '4px',
        marginBottom: '16px',
      }}>
        <h2 css={{ marginBottom: '8px' }}>Select blocks</h2>
        <SelectBlocksList blocks={blocks} />
      </div>
    </Collapse>
  );
};
