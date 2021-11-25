import { VFC } from 'react';
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Tag</ModalHeader>
        <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr="16px">OK</Button>
            <Button>Cancel</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
