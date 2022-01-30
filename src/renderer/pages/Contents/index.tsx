import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { Box } from '@chakra-ui/react';

import { useContents } from './hooks';


import {
  ModalToCreateTag,
  ModalToSelectTags,
  ModalToSearchTags,
  SearchedTagsList,
  NormalButton,
  SearchIcon,
  PageMotion,
} from '~/components';

import {
  ContentsList,
  DrawerToCreateContent,
} from './components';

import { 
  container,
  inputBox,
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
      <PageMotion css={container}>
        <ModalToSelectTags />
        <ModalToCreateTag />
        <ModalToSearchTags />
        <DrawerToCreateContent 
          isOpen={isOpenDrawerToCreateContent}
          onClose={onCloseDrawerToCreateContent} />
        <Box>
          <NormalButton 
            css={{ display: 'block', marginBottom: '16px' }}
            onClick={onOpenDrawerToCreateContent}>
            Add new
          </NormalButton>
          <div css={{
            padding: '16px',
            border: `1px solid ${colors.cyan.DEFAULT}`,
            borderRadius: '4px',
            marginBottom: '32px',
          }}>
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
      </PageMotion>
  );
};
