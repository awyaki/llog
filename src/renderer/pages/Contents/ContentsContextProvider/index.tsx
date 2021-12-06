import { FC, createContext, Dispatch } from 'react';

import { Content } from '@prisma/client'

import { Action, useContents } from '../hooks/useContents';

type ContentsContextType = {
  contents: Content[];
  dispatch: Dispatch<Action>; 
};

export const ContentsContext = createContext<ContentsContextType>({ contents: [], dispatch: () => {} });

export const ContentsContextProvider: FC = ({ children }) => {
  const [contents, dispatch] = useContents();

  return (
    <ContentsContext.Provider value={{ contents: contents, dispatch: dispatch }}>
      {children}
    </ContentsContext.Provider >
  );
};
