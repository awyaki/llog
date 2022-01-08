import { VFC, useContext, useEffect, useState } from 'react';

import { Tag } from '@prisma/client';

import { getAllTag } from '~/api';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { 
  tagStyle,
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
  const [tags, setTags] = useState<Tag[]>([]);

  const { 
    selectedTags,
    isOpenModalToSelectTags, 
    onCloseModalToSelectTags
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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul css={tagsContainer}>
              {tags.map(({ id, name }) => <li key={id}><button css={tagStyle}>{name}</button></li>)}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
