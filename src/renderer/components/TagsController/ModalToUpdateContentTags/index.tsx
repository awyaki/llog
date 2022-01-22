import { VFC, useContext, useCallback } from 'react';

import { 
  SelectedTagsContext,
  ContentContext
} from '~/components';

import { 
  updateContentTags, 
  deleteConnectContentTags,
  getContent,
} from '~/api';

import { 
  makeTagStyle,
  tagsContainer,
  inputBox,
  buttonStyle,
  cancel
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
    setSelectedTags,
    searchQuery,
    setSearchQueryAction,
    isOpenModalToUpdateContentTags,
    onCloseModalToUpdateContentTags,
    onToggleSelectedTags,
  } = useContext(SelectedTagsContext);

  const { setContent } = useContext(ContentContext);

  const onUpdateContentTags = useCallback(async () => {
    await deleteConnectContentTags(contentId);
    await updateContentTags(contentId, selectedTags);
    const updatedContet = await getContent(contentId);
    console.log('ok is clicked');
    setContent(updatedContet);
  }, [contentId, selectedTags]);
  
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
              css={{ ...buttonStyle, marginRight: '4px'  }}
              onClick={onUpdateContentTags}
            >OK</button>
            <button 
              css={cancel}
              onClick={onCloseModalToUpdateContentTags}
            >Cancel</button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
