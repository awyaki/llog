import { VFC, useContext, useCallback } from 'react';


import { Tag } from '@prisma/client';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { 
  makeTagStyle,
  inputBox
} from './style';

import {
  tagsContainer,
  tagStyle,
  reverseTagStyle
} from '../style';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export const ModalToSearchTags: VFC = () => {

  const { 
    filteredTags,
    searchedTags,
    setSearchedTags,
    searchQuery,
    setSearchQueryAction,
    isOpenModalToSearchTags,
    onCloseModalToSearchTags,
  } = useContext(SelectedTagsContext);
  
  
  const onToggleSelect = useCallback((tag: Tag) => {
    return () => {
      setSearchedTags((prev) => {
        const index = prev.findIndex(({ id }) => tag.id === id);
        return index === -1 
                  ? prev.concat({ ...tag })
                  : prev.slice(0, index).concat(prev.slice(index+1));
      });
    };
  }, [setSearchedTags]);
  return (
   <Modal isOpen={isOpenModalToSearchTags} onClose={onCloseModalToSearchTags}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Tags for Searching</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input
              css={{ ...inputBox, marginBottom: '10px' }}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQueryAction(e.target.value)}
            />
            <ul css={tagsContainer}>
              {filteredTags.map(({ id, name }) => <li key={id}>
                                            <button 
                                              onClick={onToggleSelect({ id, name })}
                                              css={searchedTags.some((tag) => tag.id === id) ? reverseTagStyle : tagStyle}
                                            >{name}</button>
                                            </li>)}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
