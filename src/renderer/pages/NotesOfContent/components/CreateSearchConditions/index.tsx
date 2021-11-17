import { VFC } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react"

type Props = Pick<ModalProps, 'isOpen' | 'onClose' | 'onOverlayClick'>;

export const CreateSearchConditions: VFC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          This is Modal header
        </ModalHeader>
        <ModalBody>
          <p>Hello world</p>
        </ModalBody>
        <ModalFooter>
          <ModalCloseButton />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};


