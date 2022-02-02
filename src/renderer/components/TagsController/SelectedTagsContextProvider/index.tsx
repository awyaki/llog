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
  filterTagsbyUserInput: (userInput: string) => Tag[];
  setTagsAction: (tags: Tag[]) => void;
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
  isOpenModalToUpdateContentTags: boolean;
  onOpenModalToUpdateContentTags: () => void;
  onCloseModalToUpdateContentTags: () => void;
  onReleaseSearchedTags: () => void;
  onToggleSelectedTags: (tag: Tag) => () => void;
  onToggleSearchedTags: (tag: Tag) => () => void;
};

export const SelectedTagsContext = createContext<SelectedTagsContextType>({
  tags: [],
  filterTagsbyUserInput: () => [],
  setTagsAction: () => {},
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

  const [{ tags, filterTagsbyUserInput }, dispatchTagsWithFilterFunction] = useFilterTags();

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
      dispatchTagsWithFilterFunction({ type: 'TAGS_CONTROLLER/SET_TAGS', tags: allTags });
    })();
  }, [dispatchTagsWithFilterFunction]);

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
    dispatchTagsWithFilterFunction({ type: 'TAGS_CONTROLLER/SET_TAGS', tags: tags });
  }, [dispatchTagsWithFilterFunction]);

  
  const onCloseModalToSearchTagsWithResetQuery = useCallback(() => {
    onCloseModalToSearchTags();
  }, [onCloseModalToSearchTags]);

  const onCloseModalToSelectTagsWithResetQuery = useCallback(() => {
    onCloseModalToSelectTags();
  }, [onCloseModalToSelectTags]);


  const onCloseModalToUpdateContentTagsWithResetQuery = useCallback(() => {
    onCloseModalToUpdateContentTags();
  }, [onCloseModalToUpdateContentTags]);

  return (
    <SelectedTagsContext.Provider value={{
      tags,
      filterTagsbyUserInput,
      setTagsAction,
      selectedTags,
      setSelectedTags,
      searchedTags,
      setSearchedTags,
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
