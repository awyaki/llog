import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useContents } from './hooks';


import {
  ModalToCreateTag,
  ModalToSelectTags,
  ModalToSearchTags,
  SearchedTagsList,
  NormalButton,
  SearchIcon,
  PageMotion,
  AccordionToSearchTags
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

        <div>
            <div css={{
              top: '24px',
              position: 'sticky',
              backgroundColor: colors.white,
              paddingBottom: '32px',
              zIndex: 1,
            }}>
            <NormalButton 
              css={{ display: 'block', marginBottom: '16px' }}
              onClick={onOpenDrawerToCreateContent}>
              Add new
            </NormalButton>
            <div css={{
              padding: '16px',
              border: `1px solid ${colors.cyan.DEFAULT}`,
              borderRadius: '4px',
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
              <AccordionToSearchTags />
            </div>
          </div>

          <ContentsList contents={filtered} />
        </div>
      </PageMotion>
  );
};
