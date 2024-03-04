import { VFC, MouseEventHandler, Dispatch } from "react";
import { Action } from "../../hooks/useConditions";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerCloseButton,
  DrawerProps,
} from "@chakra-ui/react";

import { ConditionCard } from "./components/ConditionCard";
import { CreateConditionButton } from "./components/CreateConditionButton";

import { ConditionWithIsValid } from "~/pages/NotesOfContent/types";

type Props = Pick<DrawerProps, "isOpen" | "onClose"> & {
  conditions: ConditionWithIsValid[];
  handleCreateConditionButtonClick: MouseEventHandler<HTMLButtonElement>;
  dispatch: Dispatch<Action>;
};

export const SearchConditions: VFC<Props> = ({
  conditions,
  handleCreateConditionButtonClick,
  isOpen,
  onClose,
  dispatch,
}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
      <DrawerCloseButton />
      <DrawerContent>
        <DrawerHeader>Search Conditions</DrawerHeader>
        <ul>
          {conditions.map((condition) => (
            <li key={condition.id}>
              <ConditionCard condition={condition} dispatch={dispatch} />
            </li>
          ))}
        </ul>
        <DrawerFooter>
          <CreateConditionButton onClick={handleCreateConditionButtonClick} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
