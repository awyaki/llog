import { VFC, useContext, useCallback } from 'react';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { updateContentTags } from '~/api';

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

type Props = {
  contentId: number;
};

export const ModalToUpdateContentTags: VFC<Props> = ({ contentId }) => {

  const { 
    filteredTags,
    selectedTags,
    searchQuery,
    setSearchQueryAction,
    isOpenModalToUpdateContentTags,
    onCloseModalToUpdateContentTags,
    onToggleSelectedTags,
  } = useContext(SelectedTagsContext);

  const onUpdateContentTags = useCallback(async () => {
    const result = await updateContentTags(contentId, selectedTags);
    console.log(result);
  }, [updateContentTags]);
  
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
              onClick={onUpdateContentTags}
            >OK</button>
            <button 
              onClick={onCloseModalToUpdateContentTags}
            >Cancel</button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
