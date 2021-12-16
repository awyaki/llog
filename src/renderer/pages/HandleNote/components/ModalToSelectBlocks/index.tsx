import { VFC } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { Block as BlockType } from '@prisma/client';

import { container } from './style';

import { Block } from './components/Block';

type Props = {
  blocks: BlockType[];
};

export const ModalToSelectBlocks: VFC<Props> = ({ blocks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Modal isOpen={true} onClose={onClose}>
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
