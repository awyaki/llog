import {
  useState,
  useCallback
} from 'react';


export const useSelectTags = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleIsOpen = useCallback(() => {
    setIsOpen((p) => !p);
  }, []);
    
  return {
    isOpen,
    toggleIsOpen,
  };
};
