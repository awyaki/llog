import { 
  useState,
  useEffect, 
  useCallback
} from 'react';

import { Content } from '@prisma/client';
import { useDisclosure } from '@chakra-ui/react';

import { getAllContent } from '~/api';

import { Mode } from '~/pages/Contents/types';

export const useContents = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [mode, setMode] = useState<Mode>('NewContent');
  const { 
    isOpen: isOpenTagCreateModal, 
    onClose: onCloseTagCreateModal,
    onOpen: onOpenTagCreateModal } = useDisclosure();
  
  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      setContents(result);
    })();
  }, []);

  const onChangeNewContent = useCallback(() => {
    setMode('NewContent');
  }, []);

  const onChangeConditions = useCallback(() => {
    setMode('Conditions');
  }, []);

  const onCreateNewContent = useCallback(() => {
    console.log('Contents: onCreateNewContent haven not between implemented.');
  }, []);

  return {
    contents,
    mode,
    onChangeConditions,
    onChangeNewContent,
    onCreateNewContent,
    isOpenTagCreateModal,
    onCloseTagCreateModal,
    onOpenTagCreateModal,
  };
};
