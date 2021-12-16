import { FC, createContext, Dispatch } from 'react';
import { Block } from '@prisma/client';

import { useSlectedBlocks, Action } from '../hooks/useSelectedBlocks';

type SelectedBlocksContextType = {
  blocks: Block[];
  dispatch: Dispatch<Action>;
};

export const SelectedBlocksContext = createContext<SelectedBlocksContextType>({ blocks: [], dispatch: () => {} });

export const SelectedBlocksContextProvider: FC = () => {
  const [selectedBlocks, dispatch] = useSlectedBlocks();
  return (
    <SelectedBlocksContext.Provider value={{ blocks: selectedBlocks, dispatch: dispatch }}>
    </SelectedBlocksContext.Provider>
  );
};
