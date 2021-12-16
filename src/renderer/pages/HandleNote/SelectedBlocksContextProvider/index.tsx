import { FC, createContext, Dispatch } from 'react';
import { Block } from '@prisma/client';

import { useSlectedBlocks, Action } from '../hooks/useSelectedBlocks';

type SelectedBlocksContextType = {
  selectedBlocks: Block[];
  dispatch: Dispatch<Action>;
};

export const SelectedBlocksContext = createContext<SelectedBlocksContextType>({ selectedBlocks: [], dispatch: () => {} });

export const SelectedBlocksContextProvider: FC = () => {
  const [selectedBlocks, dispatch] = useSlectedBlocks();
  return (
    <SelectedBlocksContext.Provider value={{ selectedBlocks, dispatch }}>
    </SelectedBlocksContext.Provider>
  );
};
