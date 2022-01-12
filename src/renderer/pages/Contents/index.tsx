import { VFC } from 'react';

import { pageTitle } from '~/pages/style/pageTitle';

import { Box, Flex } from '@chakra-ui/react';

import { useContents } from './hooks';

import { Header } from '../Header';

import {
  ModalToCreateTag,
  ModalToSelectTags,
  ModalToSearchTags,
  SearchedTagsList,
} from '~/components';

import {
  ContentsList,
  CreateNewContent,
} from './components';

import { container } from './style/container';

export const Contents: VFC = () => {
  const {
    contents,
    onCreateNewContent,
    onOpenTagCreateModal
  } = useContents();
  return (
      <>
        <ModalToSelectTags />
        <ModalToCreateTag />
        <ModalToSearchTags />
        <Header />
        <Box css={container}>
          <Box>
            <h2 css={pageTitle}>Contents</h2>
            <SearchedTagsList />
            <ContentsList contents={contents} />
          </Box>
          <CreateNewContent 
            contents={contents}
            onOpenTagCreateModal={onOpenTagCreateModal} 
            onCreateNewContent={onCreateNewContent} />
        </Box>
      </>
  );
};
