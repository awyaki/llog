import { createContext, FC } from 'react';
import { Tag } from '@prisma/client';

import { useSelectTags } from '../hooks/useSelectTags';

type SelectedTagsContextType = {
  selectedTags: Tag[];
  toggleSelect: (a: Tag) => void;
};

export const SelectedTagsContext = createContext<SelectedTagsContextType>({ selectedTags: [], toggleSelect: () => {} });


export const SelectedTagsProvider: FC = ({ children }) => {
  const { selectedTags, toggleSelect } = useSelectTags();
  
  return (
    <SelectedTagsContext.Provider value={{ selectedTags: selectedTags, toggleSelect: toggleSelect }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};



