import { VFC, useContext, useCallback } from 'react';

import { 
  SelectedTagsContext,
  ContentContext,
  NormalButton,
  WarningButton
} from '~/components';

import { 
  updateContentTags, 
  deleteConnectContentTags,
  getContent,
} from '~/api';

import { 
  inputBox,
  buttonStyle,
  cancel
} from './style';

import {
  tagsContainer,
  reverseTagStyle,
  tagStyle
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

  const { setContent } = useContext(ContentContext);

  const onUpdateContentTags = useCallback(async () => {
    await deleteConnectContentTags(contentId);
    await updateContentTags(contentId, selectedTags);
    const updatedContet = await getContent(contentId);
    setContent(updatedContet);
    onCloseModalToUpdateContentTags();
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
                                              css={selectedTags.some((tag) => tag.id === id) ? reverseTagStyle : tagStyle}
                                            >{name}</button>
                                            </li>)}
            </ul>
          </ModalBody>
          <ModalFooter>
            <NormalButton 
              css={{ marginRight: '4px' }}
              onClick={onUpdateContentTags}>
              Update
            </NormalButton>
            <WarningButton onClick={onCloseModalToUpdateContentTags}>
              Cancel
            </WarningButton>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
