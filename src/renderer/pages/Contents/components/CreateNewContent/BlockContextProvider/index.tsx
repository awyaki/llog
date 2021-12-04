import { useState, createContext, FC, Dispatch, SetStateAction } from 'react';

type BlockContextType = {
  block: string;
  setBlock: Dispatch<SetStateAction<string>>;
};

export const BlockContext = createContext<BlockContextType>({ block: '', setBlock: () => {} });

export const BlockContextProvider: FC = ({ children }) => {
  const [block, setBlock] = useState('');
  return (
    <BlockContext.Provider value={{ block: block, setBlock: setBlock }}>
      {children}
    </BlockContext.Provider>
  );
};
