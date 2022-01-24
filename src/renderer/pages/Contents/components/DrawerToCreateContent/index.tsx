import { VFC, useCallback } from 'react';

import { CreateNewContent } from '../CreateNewContent';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerProps,
} from '@chakra-ui/react'


export const DrawerToCreateContent: VFC<Omit<DrawerProps, 'children'>> = ({ 
  isOpen,
  onClose,
}) => {

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Crete Content</DrawerHeader>
        <DrawerBody>
          <CreateNewContent />
        </DrawerBody>
        <DrawerFooter>
          <button>Create</button>
          <button onClick={onClose}>Cancel</button>
        </DrawerFooter>
      </DrawerContent>
      
    </Drawer>
  );
};
