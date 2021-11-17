import { VFC, MouseEventHandler } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
} from "@chakra-ui/react"


import { ConditionCard } from './components/ConditionCard';
import { CreateConditionButton } from './components/CreateConditionButton';


import { SearchCondition } from '~/stub/types';

type Props = Pick<DrawerProps, 'isOpen' | 'onClose'> & {
  conditions: SearchCondition[];
  handleCreateConditionButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchConditions: VFC<Props> = (
  { 
    conditions, 
    handleCreateConditionButtonClick,
    isOpen,
    onClose,
  }
) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
      <DrawerCloseButton />
      <DrawerContent>
        <ul>
          {conditions.map((condition) => <li><ConditionCard condition={condition} /></li>)}
        </ul>
        <CreateConditionButton 
          onClick={handleCreateConditionButtonClick} />
      </DrawerContent>
    </Drawer>
  );
};
