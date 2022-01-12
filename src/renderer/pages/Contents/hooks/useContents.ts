import { 
  useState,
  useEffect, 
  useCallback,
  useContext,
  ChangeEventHandler,
} from 'react';

import { useContentListWithFiltering } from './useContentListWithFiltering';

import { Content, Tag } from '@prisma/client';

import { createNGramTokenMap } from '~/utils';

import { SelectedTagsContext } from '~/components';


import { useDisclosure } from '@chakra-ui/react';

import { 
  getAllContent,
  createContent,
} from '~/api';


export const useContents = () => {
  const [{ contents, filtered, searchQuery, tokenMap }, dispatch] = useContentListWithFiltering();
  

  const { 
    isOpen: isOpenTagCreateModal, 
    onClose: onCloseTagCreateModal,
    onOpen: onOpenTagCreateModal } = useDisclosure();
    
  console.log('useContents tokenMap', tokenMap);
  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      dispatch({ type: 'CONTENTS/SET_CONTENTS', contents: result});
    })();
  }, []);


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
    onChangeSearchQuery
  };
};
