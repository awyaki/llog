import { createContext, useState, FC, SetStateAction, Dispatch } from 'react';

type IsExpandModalContextValue = {
  isExpandModal: boolean;
  setIsExpandModal: Dispatch<SetStateAction<boolean>>;
};

const IsExpandModalContext = createContext<IsExpandModalContextValue>({ isExpandModal: false, setIsExpandModal: () => {} });

const IsExpandModalProvider: FC = ({ children }) => {
  const [isExpandModal, setIsExpandModal] = useState(false);
  return (
    <IsExpandModalContext.Provider value={{ isExpandModal: isExpandModal, setIsExpandModal: setIsExpandModal }}>
      {children}
    </IsExpandModalContext.Provider>
  );
};
 

export { IsExpandModalContext, IsExpandModalProvider };
