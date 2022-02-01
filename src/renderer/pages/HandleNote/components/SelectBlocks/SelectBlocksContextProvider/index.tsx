import { 
  FC, 
  createContext,
  useState,
  useCallback
  } from 'react';

export const SelectBlocksContext = createContext<{
  isOpen: boolean;
  toggleIsOpen: () => void;
}>({
  isOpen: false,
  toggleIsOpen: () => {},
}); 


export const SelectBlocksContextProvder: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleIsOpen = useCallback(() => {
    setIsOpen((p) => !p);
  }, []);

  return (
    <SelectBlocksContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </SelectBlocksContext.Provider>
  );
};
