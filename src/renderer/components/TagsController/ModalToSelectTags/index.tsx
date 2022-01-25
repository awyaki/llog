import { VFC, useContext } from 'react';

import { 
  SearchIcon, 
  WarningButton, 
  SelectedTagsContext,
} from '~/components';


import { 
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
  ModalFooter,
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
            <div css={{ display: 'flex', alignItems: 'flex-end', marginBottom: '16px' }}>
              <input 
                css={{ ...inputBox, marginRight: '4px' }}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQueryAction(e.target.value)} />
              <SearchIcon />
            </div>
            <ul css={tagsContainer}>
              {filteredTags.map(({ id, name }) => 
                                  <li key={id}>
                                      <button 
                                        onClick={onToggleSelectedTags({ id, name })}
                                        css={selectedTags.some((tag) => tag.id === id) ? reverseTagStyle : tagStyle}
                                      >{name}</button>
                                  </li>)}
            </ul>
          </ModalBody>
          <ModalFooter>
            <WarningButton onClick={onCloseModalToSelectTags}>
              Cancel
            </WarningButton>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
