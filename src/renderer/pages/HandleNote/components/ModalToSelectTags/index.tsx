import { VFC } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react'

import { Tag } from './components';

import { Tag as TagType } from '@prisma/client';

import { container } from './style';


type Props = {
  tags: TagType[];
} & Omit<ModalProps, 'children'>;

export const ModalToSelectTags: VFC<Props> = ({ 
  tags,
  isOpen,
  onClose,
  }) => {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Blocks</ModalHeader>
            <ModalBody>
              <ul css={container}>
                {tags.map(({ id, name }) => <li key={id}><Tag name={name}></Tag></li>)}
              </ul>
            </ModalBody>
        </ModalContent>
      </Modal>
  );
};
