import { VFC, useContext, useEffect, useCallback } from 'react';

import { getAllTag } from '~/api';

import { Tag } from '@prisma/client';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { 
  makeTagStyle,
  tagsContainer
} from './style';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const ModalToSelectTags: VFC = () => {

  const { 
    tags,
    setTags,
    selectedTags,
    isOpenModalToSelectTags, 
    onCloseModalToSelectTags,
    onToggleSelectedTags,
  } = useContext(SelectedTagsContext);
  
  useEffect(() => {
    (async () => {
      const allTags = await getAllTag();
      setTags(allTags);
    })();
  }, []);
  
  return (
   <Modal isOpen={isOpenModalToSelectTags} onClose={onCloseModalToSelectTags}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul css={tagsContainer}>
              {tags.map(({ id, name }) => <li key={id}>
                                            <button 
                                              onClick={onToggleSelectedTags({ id, name })}
                                              css={makeTagStyle(selectedTags.some((tag) => tag.id === id))}
                                            >{name}</button>
                                            </li>)}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
