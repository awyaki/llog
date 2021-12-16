import { VFC, useContext, useCallback, memo } from 'react';

import { Block as BlockType } from '@prisma/client';

import { SelectedBlocksContext } from '~/pages/HandleNote/SelectedBlocksContextProvider';

import { makeContainer } from '~/pages/style/block';

type Props = { 
  block: BlockType
};

export const Block: VFC<Props> = memo(({ block }) => {
  const { dispatch } = useContext(SelectedBlocksContext);
  const { level, unitNumber } = block; 

  const handleToggleSelectBlock = useCallback(() => {
    dispatch({ type: 'SELECTED_BLOCKS/TOGGLE', block: block });
  }, [block]);

  return (
    <button css={makeContainer(level)} onClick={handleToggleSelectBlock}>
      {unitNumber}
    </button>
  );
});
