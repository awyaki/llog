import { VFC, useContext } from 'react';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { 
  makeTagStyle,
  tagsContainer,
  inputBox
} from './style';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react'

export const ModalToUpdateContentTags: VFC = () => {

  const { 
    filteredTags,
    selectedTags,
    searchQuery,
    setSearchQueryAction,
    isOpenModalToUpdateContentTags,
    onCloseModalToUpdateContentTags,
    onToggleSelectedTags,
  } = useContext(SelectedTagsContext);
  
  return (
   <Modal isOpen={isOpenModalToUpdateContentTags} onClose={onCloseModalToUpdateContentTags}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Tags</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input 
              css={{ ...inputBox, marginBottom: '10px' }}
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQueryAction(e.target.value)} />
            <ul css={tagsContainer}>
              {filteredTags.map(({ id, name }) => <li key={id}>
                                            <button 
                                              onClick={onToggleSelectedTags({ id, name })}
                                              css={makeTagStyle(selectedTags.some((tag) => tag.id === id))}
                                            >{name}</button>
                                            </li>)}
            </ul>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={}
            >OK</button>
            <button 
              onClick={onCloseModalToUpdateContentTags}
            >Cancel</button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
