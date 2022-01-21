import { 
  useEffect, 
  useCallback,
  ChangeEventHandler,
  useContext,
} from 'react';

import { ContentsContext } from '~/components';

import { SelectedTagsContext } from '~/components';

import { Tag } from '@prisma/client';

import { useDisclosure } from '@chakra-ui/react';

import { 
  getAllContent,
  createContent,
} from '~/api';


export const useContents = () => {
  const { contents, filtered, searchQuery, contentsActionDispatch: dispatch } = useContext(ContentsContext);
  const { searchedTags } = useContext(SelectedTagsContext); 

  const { 
    isOpen: isOpenTagCreateModal, 
    onClose: onCloseTagCreateModal,
    onOpen: onOpenTagCreateModal } = useDisclosure();
    
  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      dispatch({ type: 'CONTENTS/SET_CONTENTS', contents: result});
    })();
  }, []);
  
  useEffect(() => {
    console.log('useContents searchedTags', searchedTags);
    dispatch({ type: 'CONTENTS/SET_SEARCHED_TAG_IDS', searchedTagIds: searchedTags.map(({ id }) => id)});
  }, [searchedTags]);

  const onCreateNewContent = useCallback(async (name: string, tags: Tag[], numberOfBlocks: number) => {
    await createContent(name, tags, numberOfBlocks);
    const allContents = await getAllContent();
    dispatch({ type: 'CONTENTS/SET_CONTENTS', contents: allContents });
    console.log('Contents: onCreateNewContent haven not between implemented.');
  }, []);

  const onChangeSearchQuery = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    dispatch({ type: 'CONTENTS/SET_SEARCH_QUERY', searchQuery: e.target.value });
  }, []);
  

  return {
    contents,
    filtered,
    searchQuery,
    onCreateNewContent,
    isOpenTagCreateModal,
    onCloseTagCreateModal,
    onOpenTagCreateModal,
    dispatch,
    onChangeSearchQuery,
  };
};
