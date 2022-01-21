import { 
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction
} from 'react';

import { ContentWithRelation } from '../type';


type ContentContextType = {
  content: ContentWithRelation | null;
  setContent: Dispatch<SetStateAction<ContentWithRelation | null>>;
};

export const ContentContext = createContext<ContentContextType>({ content: null, setContent: () => {} });

export const ContentContextProvider: FC = ({ children }) => {
  const [content, setContent] = useState<ContentWithRelation | null>(null);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};
