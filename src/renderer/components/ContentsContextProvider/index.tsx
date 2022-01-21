import { 
  FC, 
  Dispatch, 
  createContext,
} from 'react';

import { useContentListWithFiltering, Action } from './hooks';

import { ContentWithRelation } from '~/components/type';

type ContentContextType = {
  contents: ContentWithRelation[];
  filtered: ContentWithRelation[];
  searchQuery: string;
  contentsActionDispatch: Dispatch<Action>;
};

export const ContentsContext = createContext<ContentContextType>({
  contents: [],
  filtered: [],
  searchQuery: '',
  contentsActionDispatch: () => {},
});;

export const ContentsContextProvider: FC = ({ children }) => {
  const [{ contents, filtered, searchQuery }, contentsActionDispatch] = useContentListWithFiltering(); 
  

  return (
    <ContentsContext.Provider value={{ contents, filtered, searchQuery, contentsActionDispatch }}>
      {children}
    </ContentsContext.Provider>
  );
};
