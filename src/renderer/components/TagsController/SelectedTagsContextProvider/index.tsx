import { 
  FC, 
  useState, 
  useCallback, 
  createContext, 
  Dispatch, 
  SetStateAction,
  useEffect,
  } from 'react';

import { getAllTag } from '~/api';

import { useFilterTags } from './hooks';

import { Tag } from '@prisma/client';

import { useDisclosure } from '@chakra-ui/react';


type SelectedTagsContextType = {
  tags: Tag[],
  filteredTags: Tag[],
  setTagsAction: (tags: Tag[]) => void;
  setSearchQueryAction: (searchQuery: string) => void;
  selectedTags: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  searchedTags: Tag[],
  setSearchedTags: Dispatch<SetStateAction<Tag[]>>;
  searchQuery: string;
  isOpenModalToSelectTags: boolean;
  onOpenModalToSelectTags: () => void;
  onCloseModalToSelectTags: () => void;
  isOpenModalToCreateTag: boolean;
  onOpenModalToCreateTag: () => void;
  onCloseModalToCreateTag: () => void;
  isOpenModalToSearchTags: boolean;
  onOpenModalToSearchTags: () => void;
  onCloseModalToSearchTags: () => void;
  isOpenModalToUpdateContentTags: boolean;
  onOpenModalToUpdateContentTags: () => void;
  onCloseModalToUpdateContentTags: () => void;
  onReleaseSearchedTags: () => void;
  onToggleSelectedTags: (tag: Tag) => () => void;
  onToggleSearchedTags: (tag: Tag) => () => void;
};

export const SelectedTagsContext = createContext<SelectedTagsContextType>({
  tags: [],
  filteredTags: [],
  setTagsAction: () => {},
  setSearchQueryAction: () => {},
  selectedTags: [],
  setSelectedTags: () => {},
  searchedTags: [],
  setSearchedTags: () => {},
  searchQuery: '',
  isOpenModalToSelectTags: false,
  onOpenModalToSelectTags: () => {},
  onCloseModalToSelectTags: () => {},
  isOpenModalToCreateTag: false,
  onOpenModalToCreateTag: () => {},
  onCloseModalToCreateTag: () => {},
  isOpenModalToSearchTags: false,
  onOpenModalToSearchTags: () => {},
  onCloseModalToSearchTags: () => {},
  isOpenModalToUpdateContentTags: false,
  onOpenModalToUpdateContentTags: () => {},
  onCloseModalToUpdateContentTags: () => {},
  onReleaseSearchedTags: () => {},
  onToggleSelectedTags: () => () => {},
  onToggleSearchedTags: () => () => {},
});


export const SelectedTagsContextProvider: FC = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchedTags, setSearchedTags] = useState<Tag[]>([]);

  const [{ tags, filteredTags, searchQuery }, dispatchTagsWithFiltering] = useFilterTags();

  const { 
    isOpen: isOpenModalToSelectTags,
    onOpen: onOpenModalToSelectTags, 
    onClose: onCloseModalToSelectTags,
  } = useDisclosure();

  const { 
    isOpen: isOpenModalToCreateTag,
    onOpen: onOpenModalToCreateTag, 
    onClose: onCloseModalToCreateTag,
  } = useDisclosure();

  const {
    isOpen: isOpenModalToSearchTags,
    onOpen: onOpenModalToSearchTags,
    onClose: onCloseModalToSearchTags,
  } = useDisclosure();

  const {
    isOpen: isOpenModalToUpdateContentTags,
    onOpen: onOpenModalToUpdateContentTags,
    onClose: onCloseModalToUpdateContentTags
  } = useDisclosure();
  
  useEffect(() => {
    (async () => {
      const allTags = await getAllTag();
      dispatchTagsWithFiltering({ type: 'TAGS_CONTROLLER/SET_TAGS', tags: allTags });
    })();
  }, [dispatchTagsWithFiltering]);

  const onReleaseSearchedTags = useCallback(() => {
    setSearchedTags([]);
  }, []);

  const onToggleSelectedTags = useCallback((tag: Tag) => {
    return () => {
      setSelectedTags((prev) => {
        const index = prev.findIndex(({ id }) => tag.id === id);
        return index === -1 
                  ? prev.concat({ ...tag })
                  : prev.slice(0, index).concat(prev.slice(index+1));
      });
    };
  }, [setSelectedTags]);

  const onToggleSearchedTags = useCallback((tag: Tag) => {
    return () => {
      setSearchedTags((prev) => {
        const index = prev.findIndex(({ id }) => tag.id === id);
        return index === -1 
                  ? prev.concat({ ...tag })
                  : prev.slice(0, index).concat(prev.slice(index+1));
      });
    };
  }, [setSearchedTags]);
  
  const setTagsAction = useCallback((tags: Tag[]) => {
    dispatchTagsWithFiltering({ type: 'TAGS_CONTROLLER/SET_TAGS', tags: tags });
  }, [dispatchTagsWithFiltering]);

  const setSearchQueryAction = useCallback((searchQuery: string) => {
    dispatchTagsWithFiltering({ type: 'TAGS_CONTROLLER/SET_SEARCH_QUERY', searchQuery: searchQuery });
  }, [dispatchTagsWithFiltering]);
  
  const onCloseModalToSearchTagsWithResetQuery = useCallback(() => {
    onCloseModalToSearchTags();
    setSearchQueryAction('');
  }, [onCloseModalToSearchTags, setSearchQueryAction]);

  const onCloseModalToSelectTagsWithResetQuery = useCallback(() => {
    onCloseModalToSelectTags();
    setSearchQueryAction('');
  }, [onCloseModalToSelectTags, setSearchQueryAction]);


  const onCloseModalToUpdateContentTagsWithResetQuery = useCallback(() => {
    onCloseModalToUpdateContentTags();
    setSearchQueryAction('');
  }, [onCloseModalToUpdateContentTags, setSearchQueryAction]);

  return (
    <SelectedTagsContext.Provider value={{
      tags,
      filteredTags,
      setTagsAction,
      setSearchQueryAction,
      selectedTags,
      setSelectedTags,
      searchedTags,
      setSearchedTags,
      searchQuery,
      isOpenModalToSelectTags,
      onOpenModalToSelectTags,
      onCloseModalToSelectTags: onCloseModalToSelectTagsWithResetQuery,
      isOpenModalToCreateTag,
      onOpenModalToCreateTag,
      onCloseModalToCreateTag,
      isOpenModalToSearchTags,
      onOpenModalToSearchTags,
      onCloseModalToSearchTags: onCloseModalToSearchTagsWithResetQuery,
      isOpenModalToUpdateContentTags,
      onOpenModalToUpdateContentTags,
      onCloseModalToUpdateContentTags: onCloseModalToUpdateContentTagsWithResetQuery,
      onReleaseSearchedTags,
      onToggleSelectedTags,
      onToggleSearchedTags,
    }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};
