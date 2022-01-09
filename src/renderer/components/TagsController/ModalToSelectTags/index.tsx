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
    setSelectedTags,
    isOpenModalToSelectTags, 
    onCloseModalToSelectTags
  } = useContext(SelectedTagsContext);
  
  useEffect(() => {
    (async () => {
      const allTags = await getAllTag();
      setTags(allTags);
    })();
  }, []);
  
  const onToggleSelect = useCallback((tag: Tag) => {
    return () => {
      setSelectedTags((prev) => {
        const index = prev.findIndex(({ id }) => tag.id === id);
        return index === -1 
                  ? prev.concat({ ...tag })
                  : prev.slice(0, index).concat(prev.slice(index+1));
      });
    };
  }, [setSelectedTags]);
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
                                              onClick={onToggleSelect({ id, name })}
                                              css={makeTagStyle(selectedTags.some((tag) => tag.id === id))}
                                            >{name}</button>
                                            </li>)}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
