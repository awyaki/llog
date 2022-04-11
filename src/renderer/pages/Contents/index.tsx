import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useContents } from './hooks';


import {
  SearchIcon,
  PageMotion,
  AccordionToSearchContentsByTags,
  NormalButton,
} from '~/components';

import {
  ContentsList,
  AddContent,
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
    isOpenAddContentForm,
    handleCloseAddContentForm,
    handleToggleIsOpenAddContentForm,
  } = useContents();
  return (
      <PageMotion css={container}>
        <div css={{
          flexGrow: 1,
        }}>
            <NormalButton onClick={handleToggleIsOpenAddContentForm}>
              Add Content
            </NormalButton>
            <div css={{
              top: 0,
              position: 'sticky',
              backgroundColor: colors.white,
              paddingBottom: '32px',
              zIndex: 1,
            }}>
            <div css={{
              padding: '16px',
              border: `1px solid ${colors.cyan.DEFAULT}`,
              borderRadius: '4px',
            }}>
              <h2 css={{ ...searchTitle, marginBottom: '8px' }}>Search by name</h2>
              <div css={{ display: 'flex', alignItems: 'flex-end', marginBottom: '16px' }}>
                <input 
                  css={{ ...inputBox, marginRight: '4px' }}
                  type="text" 
                  value={searchQuery}
                  onChange={onChangeSearchQuery} />
                <SearchIcon />
              </div>
              <AccordionToSearchContentsByTags />
            </div>
          </div>
          <ContentsList contents={filtered} />
        </div>
        <AddContent 
          onClose={handleCloseAddContentForm}
          isOpen={isOpenAddContentForm} />
      </PageMotion>
  );
};
