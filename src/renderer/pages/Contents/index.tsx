import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { useContents } from './hooks';


import {
  ModalToCreateTag,
  ModalToSelectTags,
  ModalToSearchTags,
  SearchedTagsList,
  NormalButton,
  SearchIcon,
  Menu,
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
      <div css={{ display: 'flex' }}>
        <ModalToSelectTags />
        <ModalToCreateTag />
        <ModalToSearchTags />
        <DrawerToCreateContent 
          isOpen={isOpenDrawerToCreateContent}
          onClose={onCloseDrawerToCreateContent} />
        <Menu />
        <Box css={container}>
          <NormalButton 
            css={{ display: 'block', marginBottom: '16px' }}
            onClick={onOpenDrawerToCreateContent}>
            Add new
          </NormalButton>
          <div css={searchBox}>
            <h2 css={{ ...searchTitle, marginBottom: '8px' }}>Search</h2>
            <div css={{ display: 'flex', alignItems: 'flex-end', marginBottom: '16px' }}>
              <input 
                css={{ ...inputBox, marginRight: '4px' }}
                type="text" 
                value={searchQuery}
                onChange={onChangeSearchQuery} />
              <SearchIcon />
            </div>
            <SearchedTagsList />
          </div>
          <ContentsList contents={filtered} />
        </Box>
      </div>
  );
};
