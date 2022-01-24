import { VFC, useContext } from 'react';

import { SearchIcon } from '~/components';

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
  ModalCloseButton,
} from '@chakra-ui/react'

export const ModalToSelectTags: VFC = () => {

  const { 
    filteredTags,
    selectedTags,
    searchQuery,
    setSearchQueryAction,
    isOpenModalToSelectTags, 
    onCloseModalToSelectTags,
    onToggleSelectedTags,
  } = useContext(SelectedTagsContext);
  
  return (
   <Modal isOpen={isOpenModalToSelectTags} onClose={onCloseModalToSelectTags}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div css={{ display: 'flex', alignItems: 'flex-end' }}>
              <input 
                css={{ ...inputBox, marginRight: '4px' }}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQueryAction(e.target.value)} />
              <SearchIcon />
            </div>
            <ul css={tagsContainer}>
              {filteredTags.map(({ id, name }) => <li key={id}>
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
