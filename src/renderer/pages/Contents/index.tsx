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
  DrawerToCreateContent,
} from './components';

import { 
  container,
  inputBox
} from './style';

export const Contents: VFC = () => {
  const {
    filtered,
    searchQuery,
    onChangeSearchQuery,
    isOpenDrawerToCreateContent,
    onOpenDrawerToCreateContent,
    onCloseDrawerToCreateContent,
  } = useContents();
  return (
      <>
        <ModalToSelectTags />
        <ModalToCreateTag />
        <ModalToSearchTags />
        <DrawerToCreateContent 
          isOpen={isOpenDrawerToCreateContent}
          onClose={onCloseDrawerToCreateContent} />
        <Header />
        <Box css={container}>
          <Box w="45%">
            <h2 css={{ ...pageTitle, marginBottom: '8px' }}>Contents</h2>
            <button onClick={onOpenDrawerToCreateContent}>Create</button>
            <input 
              css={inputBox}
              type="text" 
              value={searchQuery}
              onChange={onChangeSearchQuery} />
            <SearchedTagsList />
            <ContentsList contents={filtered} />
          </Box>
        </Box>
      </>
  );
};
