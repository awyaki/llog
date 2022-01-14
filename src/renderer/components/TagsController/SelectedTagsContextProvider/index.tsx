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
  isOpenModalToSelectTags: boolean;
  onOpenModalToSelectTags: () => void;
  onCloseModalToSelectTags: () => void;
  isOpenModalToCreateTag: boolean;
  onOpenModalToCreateTag: () => void;
  onCloseModalToCreateTag: () => void;
  isOpenModalToSearchTags: boolean;
  onOpenModalToSearchTags: () => void;
  onCloseModalToSearchTags: () => void;
  onReleaseSearchedTags: () => void;
  onToggleSelectedTags: (tag: Tag) => () => void;
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
  isOpenModalToSelectTags: false,
  onOpenModalToSelectTags: () => {},
  onCloseModalToSelectTags: () => {},
  isOpenModalToCreateTag: false,
  onOpenModalToCreateTag: () => {},
  onCloseModalToCreateTag: () => {},
  isOpenModalToSearchTags: false,
  onOpenModalToSearchTags: () => {},
  onCloseModalToSearchTags: () => {},
  onReleaseSearchedTags: () => {},
  onToggleSelectedTags: () => () => {},
});


export const SelectedTagsContextProvider: FC = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchedTags, setSearchedTags] = useState<Tag[]>([]);

  const [{ tags, filteredTags }, dispatchTagsWithFiltering] = useFilterTags();

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
  
  const setTagsAction = useCallback((tags: Tag[]) => {
    dispatchTagsWithFiltering({ type: 'TAGS_CONTROLLER/SET_TAGS', tags: tags });
  }, [dispatchTagsWithFiltering]);

  const setSearchQueryAction = useCallback((searchQuery: string) => {
    dispatchTagsWithFiltering({ type: 'TAGS_CONTROLLER/SET_SEARCH_QUERY', searchQuery: searchQuery });
  }, [dispatchTagsWithFiltering]);

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
      isOpenModalToSelectTags,
      onOpenModalToSelectTags,
      onCloseModalToSelectTags,
      isOpenModalToCreateTag,
      onOpenModalToCreateTag,
      onCloseModalToCreateTag,
      isOpenModalToSearchTags,
      onOpenModalToSearchTags,
      onCloseModalToSearchTags,
      onReleaseSearchedTags,
      onToggleSelectedTags,
    }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};
