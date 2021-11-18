import { VFC, useContext } from 'react';


import { useConditionList } from './hooks/useConditionList';

import { ConditionList } from './components/ConditionList';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  FormControl,
  VStack,
  Button,
} from "@chakra-ui/react"


type Props = Pick<ModalProps, 'isOpen' | 'onClose' | 'onOverlayClick'>;

export const CreateSearchConditions: VFC<Props> = ({ isOpen, onClose }) => {
  const [conditionList, dispatch] = useConditionList();
  return (
        <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Create conditions
            </ModalHeader>
            <ModalBody>
              <FormControl>
                <VStack>
                  <ConditionList conditionList={conditionList} dispatch={dispatch} />
                </VStack>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button mr="16px" onClick={() => { dispatch({ type: 'CONDITION_CREATE_MODAL/CREATE' }); console.log('click'); }}>New</Button>
              <Button>OK</Button>
              <ModalCloseButton />
            </ModalFooter>
          </ModalContent>
        </Modal>
  );
};


