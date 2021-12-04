import { useState, createContext, Dispatch, SetStateAction, FC } from 'react';

type NameContextType = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const NameContext = createContext<NameContextType>({ name: '', setName: () => {} });

export const NameContextProvider: FC = ({ children }) => {
  const [name, setName] = useState('');
  return (
    <NameContext.Provider value={{ name: name, setName: setName }}>
      {children}
    </NameContext.Provider>
  );
};
