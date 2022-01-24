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
  NormalButton,
} from '~/components';

import {
  ContentsList,
  DrawerToCreateContent,
} from './components';

import { 
  container,
  inputBox,
  searchBox,
  searchTitle,
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
          <h2 css={{ ...pageTitle, marginBottom: '16px' }}>Contents</h2>
          <NormalButton 
            css={{ display: 'block', marginBottom: '16px' }}
            onClick={onOpenDrawerToCreateContent}>
            Add new
          </NormalButton>
          <div css={searchBox}>
            <h2 css={searchTitle}>Search</h2>
            <input 
              css={{ ...inputBox, marginBottom: '16px' }}
              type="text" 
              value={searchQuery}
              onChange={onChangeSearchQuery} />
            <SearchedTagsList />
          </div>
          <ContentsList contents={filtered} />
        </Box>
      </>
  );
};
