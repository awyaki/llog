import { VFC } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react'

import { Block as BlockType } from '@prisma/client';

import { container } from './style';

import { Block } from './components/Block';

type Props = {
  blocks: BlockType[];
} & Omit<ModalProps, 'children'>;

export const ModalToSelectBlocks: VFC<Props> = ({ 
  blocks,
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
                {blocks.map((block) => <li key={block.id}><Block block={block} /></li>)}
              </ul>
            </ModalBody>
        </ModalContent>
      </Modal>
  );
};
