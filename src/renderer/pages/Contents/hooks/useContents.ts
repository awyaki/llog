import { 
  useState,
  useEffect, 
  useCallback
} from 'react';

import { Content, Tag } from '@prisma/client';

import { useDisclosure } from '@chakra-ui/react';

import { 
  getAllContent,
  createContent,
} from '~/api';


export const useContents = () => {
  const [contents, setContents] = useState<Content[]>([]);

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


  const onCreateNewContent = useCallback(async (name: string, tags: Tag[], numberOfBlocks: number) => {
    await createContent(name, tags, numberOfBlocks);
    const allContents = await getAllContent();
    setContents(allContents);
    console.log('Contents: onCreateNewContent haven not between implemented.');
  }, []);

  return {
    contents,
    onCreateNewContent,
    isOpenTagCreateModal,
    onCloseTagCreateModal,
    onOpenTagCreateModal,
  };
};
