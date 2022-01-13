import { VFC } from 'react';

import { pageTitle } from '~/pages/style/pageTitle';

import { Box } from '@chakra-ui/react';

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

import { 
  container,
  inputBox
} from './style';

export const Contents: VFC = () => {
  const {
    contents,
    filtered,
    searchQuery,
    onCreateNewContent,
    onOpenTagCreateModal,
    onChangeSearchQuery
  } = useContents();
  return (
      <>
        <ModalToSelectTags />
        <ModalToCreateTag />
        <ModalToSearchTags />
        <Header />
        <Box css={container}>
          <Box w="45%">
            <h2 css={pageTitle}>Contents</h2>
            <input 
              css={inputBox}
              type="text" 
              value={searchQuery}
              onChange={onChangeSearchQuery} />
            <SearchedTagsList />
            <ContentsList contents={filtered} />
          </Box>
          <CreateNewContent 
            contents={contents}
            onOpenTagCreateModal={onOpenTagCreateModal} 
            onCreateNewContent={onCreateNewContent} />
        </Box>
      </>
  );
};
