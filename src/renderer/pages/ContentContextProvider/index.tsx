import { createContext, FC, Dispatch, SetStateAction } from 'react';

import { ContentWithRelation } from '../type';

import { useContent } from './hooks';

type ContentContextType = {
  content: ContentWithRelation | null;
  setContent: Dispatch<SetStateAction<ContentWithRelation | null>>;
};

export const ContentContext = createContext<ContentContextType>({
  content: null,
  setContent: () => {},
});

export const ContentContextProvider: FC = ({ children }) => {
  const { content, setContent } = useContent();

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};
