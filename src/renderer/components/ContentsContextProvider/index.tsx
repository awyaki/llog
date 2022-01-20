import { 
  FC, 
  Dispatch, 
  SetStateAction, 
  createContext,
  useState,
  useEffect,
} from 'react';

import { getAllContent } from '~/api';

import { ContentWithRelation } from '~/components/type';

type ContentContextType = {
  contents: ContentWithRelation[];
  setContents: Dispatch<SetStateAction<ContentWithRelation[]>>;
};

export const ContentsContext = createContext<ContentContextType>({
  contents: [],
  setContents: () => {},
});;

export const ContentsContextProvider: FC = ({ children }) => {
  const [contents, setContents] = useState<ContentWithRelation[]>([]);
  
  useEffect(() => {
    (async () => {
      const allContents = await getAllContent();
      setContents(allContents);
    })();
  }, [setContents]);

  return (
    <ContentsContext.Provider value={{ contents, setContents }}>
      {children}
    </ContentsContext.Provider>
  );
};
