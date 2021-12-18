import { VFC, useState, useCallback, useContext, ChangeEventHandler } from 'react';
import { getAllTag } from '~/api';
import { SelectedTagsContext } from '~/pages/HandleNote/SelectedTagsContextProvider';
import { TagContext } from '~/DBContextProviders/TagContextProvider';

import { createTag } from '~/api';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
  FormControl,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react'

type Props = Omit<ModalProps, 'children'>;

export const ModalToCreateNewTag: VFC<Props> = ({ 
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState('');
  const { dispatch: selectedTagsDispatch } = useContext(SelectedTagsContext);  
  const { dispatch: tagsDispatch } = useContext(TagContext); 

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleOKClick = useCallback(async () => {
    const newTag = await createTag(inputValue);
    selectedTagsDispatch({ type: 'SELECTED_TAGS/ADD', tag: newTag });
    const allTags = await getAllTag();
    tagsDispatch({ type: 'APP/SET_TAG', tags: allTags });
    setInputValue('');
    onClose();
  }, [inputValue]);

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New tag</ModalHeader>
            <ModalBody>
              <FormControl>
                <Input 
                  type="text" 
                  mb="16px" 
                  value={inputValue}
                  onChange={handleChange} />
                <HStack justifyContent="flex-end">
                  <Button onClick={handleOKClick}>OK</Button>
                  <Button onClick={onClose}>Cancel</Button>
                </HStack>
              </FormControl>
            </ModalBody>
        </ModalContent>
      </Modal>
  );
};
