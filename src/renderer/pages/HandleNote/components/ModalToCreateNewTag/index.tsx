import { VFC, useState, useCallback, useContext, ChangeEventHandler } from 'react';
import { SelectedTagsContext } from '~/pages/HandleNote/SelectedTagsContextProvider';

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
  const { dispatch } = useContext(SelectedTagsContext);  
  
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleOKClick = useCallback(async () => {
    const newTag = await createTag(inputValue);
    dispatch({ type: 'SELECTED_TAGS/ADD', tag: newTag });
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
