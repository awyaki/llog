import { 
  FC,
  createContext
  } from 'react';

import { useSelectTags } from '../../hooks';

type SelectTagsContextType = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const SelectTagsContext = createContext<SelectTagsContextType>({ 
  isOpen: false, 
  toggleIsOpen: () => {} });

export const SelectTagsContextProvider: FC = ({ children }) => {
  const { isOpen, toggleIsOpen } = useSelectTags();
  
  return (
    <SelectTagsContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SelectTagsContext.Provider>
  );
};
