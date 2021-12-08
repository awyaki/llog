import { createContext, FC } from 'react';

import { Content } from '@prisma/client';

import { useContent } from '../hooks/useContent';



export const ContentContext = createContext<Content | null>(null);

export const ContentContextProvider: FC = ({ children }) => {
  const content = useContent();

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
