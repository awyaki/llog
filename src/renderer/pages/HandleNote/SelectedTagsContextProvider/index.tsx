import { FC, createContext, Dispatch } from 'react';
import { useSelectedTags, Action } from './hooks';

import { Tag } from '@prisma/client';

type SelectedTagsContextType = {
  selectedTags: Tag[];
  dispatch: Dispatch<Action>;
};

export const SelectedTagsContext = createContext<SelectedTagsContextType>({ selectedTags: [], dispatch: () => {} });

export const SelectedTagsContextProvider: FC = ({ children }) => {
  const [selectedTags, dispatch] = useSelectedTags();
  return (
    <SelectedTagsContext.Provider value={{ selectedTags, dispatch }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};




