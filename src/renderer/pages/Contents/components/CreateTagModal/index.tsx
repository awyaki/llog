import { VFC, useState, useContext, ChangeEventHandler } from 'react';
import { createTag, getAllTag } from '~/api';

import { TagContext } from '~/DBContextProviders';

import { 
  Modal, 
  ModalProps, 
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  FormLabel,
  FormControl,
  Input,
  Button,
  } from '@chakra-ui/react';


export const CreateTagModal: VFC<Omit<ModalProps, 'children'>> = ({ isOpen, onClose }) => {
  const [newTagName, setNewTagName] = useState('');
  const { dispatch } = useContext(TagContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTagName(e.target.value);
  };

  const handleCreate = async () => {
    await createTag(newTagName);
    const newTags = await getAllTag();
    dispatch({ type: 'APP/SET_TAG', tags: newTags });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Tag</ModalHeader>
        <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr="16px" onClick={handleCreate}>OK</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
