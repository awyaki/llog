import { useState, useCallback } from 'react';

export const useAccordionToCreateContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);
  
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  
  return {
    isOpen,
    handleToggleOpen,
    handleClose,
  };
};
