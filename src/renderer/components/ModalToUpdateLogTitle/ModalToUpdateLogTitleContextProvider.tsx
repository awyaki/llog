import {
  FC,
  createContext
  } from 'react';

import { useDisclosure } from '@chakra-ui/react';

type ProvidedModalToUpdateLogTitleContext = {
  isOpen: boolean,
  onOpen: () => void;
  onClose: () => void;
};


export const ModalToUpdateLogTitleContext = createContext<ProvidedModalToUpdateLogTitleContext>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const ModalToUpdateLogTitleContextProvider: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalToUpdateLogTitleContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalToUpdateLogTitleContext.Provider>
  );
};
