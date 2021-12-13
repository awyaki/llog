import { createContext, FC } from 'react';

import { ContentWithRelation } from '../type';

import { useContent } from '../hooks/useContent';



export const ContentContext = createContext<ContentWithRelation | null>(null);

export const ContentContextProvider: FC = ({ children }) => {
  const content = useContent();

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
