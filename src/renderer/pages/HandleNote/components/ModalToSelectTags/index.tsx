import { VFC, useContext, MouseEventHandler } from 'react';

import { Tag as TagType } from '@prisma/client';

import { TagContext } from '~/DBContextProviders';
import { SelectedTagsContext } from '../../SelectedTagsContextProvider';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from '@chakra-ui/react'

import { Tag } from './components';

import { container } from './style';


type Props = Omit<ModalProps, 'children'>;

export const ModalToSelectTags: VFC<Props> = ({ 
  isOpen,
  onClose,
  }) => {
  const { tags } = useContext(TagContext);
  
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Tags</ModalHeader>
            <ModalBody>
              <ul css={container}>
                {tags.map((tag) => <li key={tag.id}><Tag tag={tag} /></li>)}
              </ul>
            </ModalBody>
        </ModalContent>
      </Modal>
  );
};
