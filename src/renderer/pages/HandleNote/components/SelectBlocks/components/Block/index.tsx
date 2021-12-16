import { VFC, useContext, useCallback, memo } from 'react';

import { Block as BlockType } from '@prisma/client';

import { SelectedBlocksContext } from '~/pages/HandleNote/SelectedBlocksContextProvider';

import { selected } from './style';
import { makeContainer } from '~/pages/style/block';

type Props = { 
  block: BlockType
};

export const Block: VFC<Props> = memo(({ block }) => {
  const { selectedBlocks, dispatch } = useContext(SelectedBlocksContext);
  const { level, unitNumber } = block; 

  const isSlected = selectedBlocks.includes(block);

  const handleToggleSelectBlock = useCallback(() => {
    dispatch({ type: 'SELECTED_BLOCKS/TOGGLE', block: block });
  }, [block]);

  return (
    <button css={isSlected ? selected : makeContainer(level)} onClick={handleToggleSelectBlock}>
      {unitNumber}
    </button>
  );
});
