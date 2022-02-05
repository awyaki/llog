import {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  } from 'react';

import { useDisclosure } from '@chakra-ui/react';

type ProvidedModalToUpdateLogTitleContext = {
  title: string,
  setTitle: Dispatch<SetStateAction<string>>;
  isOpen: boolean,
  onOpen: () => void;
  onClose: () => void;
};


export const ModalToUpdateLogTitleContext = createContext<ProvidedModalToUpdateLogTitleContext>({
  title: '',
  setTitle: () => {},
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const ModalToUpdateLogTitleContextProvider: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');

  return (
    <ModalToUpdateLogTitleContext.Provider value={{ title, setTitle, isOpen, onOpen, onClose }}>
      {children}
    </ModalToUpdateLogTitleContext.Provider>
  );
};
