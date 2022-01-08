import { FC, useState, createContext, Dispatch, SetStateAction } from 'react';

import { Tag } from '@prisma/client';

import { useDisclosure } from '@chakra-ui/react';

type SelectedTagsContextType = {
  selectedTags: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  isOpenModalToSelectTags: boolean;
  onOpenModalToSelectTags: () => void;
  onCloseModalToSelectTags: () => void;
  isOpenModalToCreateTag: boolean;
  onOpenModalToCreateTag: () => void;
  onCloseModalToCreateTag: () => void;
};

export const SelectedTagsContext = createContext<SelectedTagsContextType>({
  selectedTags: [],
  setSelectedTags: () => {},
  isOpenModalToSelectTags: false,
  onOpenModalToSelectTags: () => {},
  onCloseModalToSelectTags: () => {},
  isOpenModalToCreateTag: false,
  onOpenModalToCreateTag: () => {},
  onCloseModalToCreateTag: () => {},
});


export const SelectedTagsContextProvider: FC = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const { 
    isOpen: isOpenModalToSelectTags,
    onOpen: onOpenModalToSelectTags, 
    onClose: onCloseModalToSelectTags 
  } = useDisclosure();
  const { 
    isOpen: isOpenModalToCreateTag,
    onOpen: onOpenModalToCreateTag, 
    onClose: onCloseModalToCreateTag
  } = useDisclosure();

  return (
    <SelectedTagsContext.Provider value={{
      selectedTags,
      setSelectedTags,
      isOpenModalToSelectTags,
      onOpenModalToSelectTags,
      onCloseModalToSelectTags,
      isOpenModalToCreateTag,
      onOpenModalToCreateTag,
      onCloseModalToCreateTag
    }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};
