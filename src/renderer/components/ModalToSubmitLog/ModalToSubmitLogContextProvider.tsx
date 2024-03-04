import { FC, createContext } from "react";

import { useDisclosure } from "@chakra-ui/react";

type ProvidedModalToSubmitLogContext = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const ModalToSubmitLogContext =
  createContext<ProvidedModalToSubmitLogContext>({
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
  });

export const ModalToSubmitLogContextProvider: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalToSubmitLogContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalToSubmitLogContext.Provider>
  );
};
