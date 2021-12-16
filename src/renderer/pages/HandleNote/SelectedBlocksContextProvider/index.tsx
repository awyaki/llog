import { FC, createContext, Dispatch } from 'react';
import { Block } from '@prisma/client';

import { useSlectedBlocks, Action } from '../hooks/useSelectedBlocks';

type SlectedBlocksContextType = {
  blocks: Block[];
  dispatch: Dispatch<Action>;
};

export const SlectedBlocksContext = createContext<SlectedBlocksContextType>({ blocks: [], dispatch: () => {} });

export const SelectedBlocksContextProvider: FC = () => {
  const [selectedBlocks, dispatch] = useSlectedBlocks();
  return (
    <SlectedBlocksContext.Provider value={{ blocks: selectedBlocks, dispatch: dispatch }}>
    </SlectedBlocksContext.Provider>
  );
};
