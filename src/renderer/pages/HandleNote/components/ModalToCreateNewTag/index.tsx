import { VFC } from 'react';
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
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New tag</ModalHeader>
            <ModalBody>
              <FormControl>
                <Input type="text" mb="16px"/>
                <HStack justifyContent="flex-end">
                  <Button>OK</Button>
                  <Button onClick={onClose}>Cancel</Button>
                </HStack>
              </FormControl>
            </ModalBody>
        </ModalContent>
      </Modal>
  );
};
