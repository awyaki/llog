import { VFC, useState, MouseEventHandler, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

import { Content } from '@prisma/client';

import { getAllContent } from '~/api';

import { pageTitle } from '~/pages/style/pageTitle';

import { Box, Flex, useDisclosure } from '@chakra-ui/react';

import { Mode } from './types';
import { ContentsList } from './components/ContentsList';

import { Header } from '../Header';
import { Conditions } from './components/Conditions';
import { CreateNewContent as NewContent } from './components/CreateNewContent';
import { CreateContentButton } from './components/CreateContentButton';
import { SearchContentsButton } from './components/SearchContentsButton';
import { CreateTagModal } from './components/CreateTagModal';

import { container } from './style/container';

type RightViewProps = {
  mode: Mode;
  onOpenTagCreateModal: MouseEventHandler<HTMLButtonElement>;
  onCreateNewContent: MouseEventHandler<HTMLButtonElement>;
};

const RightView: VFC<RightViewProps> = ({ mode, onOpenTagCreateModal, onCreateNewContent }) => {
  return mode === 'Conditions' 
            ? <Conditions />
            : <NewContent onOpenTagCreateModal={onOpenTagCreateModal} onCreateNewContent={onCreateNewContent} />;
};

export const Contents: VFC = () => {
  const [contents, setContents] = useState<Content[]>([]);
  const [mode, setMode] = useState<Mode>('NewContent');
  const { isOpen, onClose, onOpen: onOpenTagCreateModal } = useDisclosure();
  
  const handleClickNewContent = () => {
    setMode('NewContent');
  };

  const handleClickConditions = () => {
    setMode('Conditions');
  };


  const onCreateNewContent = useCallback(() => {
    console.log('Contents: onCreateNewContent haven not between implemented.');
  }, []);

  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      setContents(result);
    })();
  }, []);
  return (
      <>
        <Header />
        <Box css={container}>
          <CreateTagModal isOpen={isOpen} onClose={onClose} />
          <Box>
            <h2 css={pageTitle}>Contents</h2>
            <Flex justify="space-between" w="120px" mb="16px">
              <CreateContentButton 
                active={mode === 'NewContent'}  
                onClick={handleClickNewContent}/>
              <SearchContentsButton 
                active={mode === 'Conditions'} 
                onClick={handleClickConditions} />
            </Flex>
            <ContentsList contents={contents} />
          </Box>
          <RightView 
            mode={mode}
            onOpenTagCreateModal={onOpenTagCreateModal}
            onCreateNewContent={onCreateNewContent}
            />
        </Box>
      </>
  );
};
