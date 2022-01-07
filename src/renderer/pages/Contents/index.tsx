import { VFC } from 'react';

import { pageTitle } from '~/pages/style/pageTitle';

import { Box, Flex } from '@chakra-ui/react';

import { useContents } from './hooks';

import { Header } from '../Header';

import {
  Conditions,
  ContentsList,
  CreateNewContent,
  CreateContentButton,
  SearchContentsButton,
  CreateTagModal,
} from './components';

import { container } from './style/container';

export const Contents: VFC = () => {
  const {
    mode,
    contents,
    onChangeConditions,
    onChangeNewContent,
    onCreateNewContent,
    isOpenTagCreateModal,
    onCloseTagCreateModal,
    onOpenTagCreateModal
  } = useContents();
  return (
      <>
        <Header />
        <Box css={container}>
          <CreateTagModal 
            isOpen={isOpenTagCreateModal} 
            onClose={onCloseTagCreateModal} />
          <Box>
            <h2 css={pageTitle}>Contents</h2>
            <Flex justify="space-between" w="120px" mb="16px">
              <CreateContentButton 
                active={mode === 'NewContent'}  
                onClick={onChangeNewContent}/>
              <SearchContentsButton 
                active={mode === 'Conditions'} 
                onClick={onChangeConditions} />
            </Flex>
            <ContentsList contents={contents} />
          </Box>
          {mode === 'Conditions' 
            ? <Conditions /> 
            : <CreateNewContent 
                onOpenTagCreateModal={onOpenTagCreateModal} 
                onCreateNewContent={onCreateNewContent} />}
        </Box>
      </>
  );
};
