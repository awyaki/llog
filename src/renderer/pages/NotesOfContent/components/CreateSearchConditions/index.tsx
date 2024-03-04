import { VFC, Dispatch } from "react";

import { Condition } from "../../types";
import { Action } from "~/pages/NotesOfContent/hooks/useConditions";

import { ConditionList } from "./components/ConditionList";

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
} from "@chakra-ui/react";

type Props = Pick<ModalProps, "isOpen" | "onClose" | "onOverlayClick"> & {
  createCondtions: Condition[];
  dispatch: Dispatch<Action>;
};

export const CreateSearchConditions: VFC<Props> = ({
  isOpen,
  onClose,
  createCondtions,
  dispatch,
}) => {
  const createCondition = () => {
    dispatch({ type: "MODAL/CREATE" });
  };

  const handleCloseAndDeleteAllCondition = () => {
    onClose();
    dispatch({ type: "MODAL/DELETE_ALL" });
  };

  const handleCreateSearchCondtion = () => {
    onClose();
    dispatch({ type: "DRAWER/CREATE" });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseAndDeleteAllCondition}
      onOverlayClick={handleCloseAndDeleteAllCondition}
    >
      <ModalOverlay />
      <ModalContent minW="800px">
        <ModalHeader>Create conditions</ModalHeader>
        <ModalBody>
          <FormControl>
            <VStack>
              <ConditionList
                conditionList={createCondtions}
                dispatch={dispatch}
              />
            </VStack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button mr="16px" onClick={createCondition}>
            New
          </Button>
          <Button onClick={handleCreateSearchCondtion}>OK</Button>
          <ModalCloseButton onClick={handleCloseAndDeleteAllCondition} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
