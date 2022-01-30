import { useContext, useCallback } from 'react';

import { Tag } from '@prisma/client';

import { getAllContent, createContent } from '~/api';

import { useDisclosure } from '@chakra-ui/react';

import { ContentsContext } from '~/components';

export const useCreateContent = () => {
  const { contents, contentsActionDispatch: dispatch } = useContext(ContentsContext);    

  const { 
    isOpen: isOpenTagCreateModal, 
    onClose: onCloseTagCreateModal,
    onOpen: onOpenTagCreateModal } = useDisclosure();
  
  const onCreateNewContent = useCallback(async (name: string, tags: Tag[], numberOfBlocks: number) => {
    await createContent(name, tags, numberOfBlocks);
    const allContents = await getAllContent();
    dispatch({ type: 'CONTENTS/SET_CONTENTS', contents: allContents });
    console.log('Contents: onCreateNewContent haven not between implemented.');
  }, []);
  
  return {
    contents,
    isOpenTagCreateModal,
    onCloseTagCreateModal,
    onOpenTagCreateModal,
    onCreateNewContent,
  };
};
