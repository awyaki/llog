import { VFC } from 'react';

import { colors } from '~/styleConfig';


import { useContents } from './hooks';


import {
  SearchIcon,
  PageMotion,
  AccordionToSearchContentsByTags,
} from '~/components';

import {
  ContentsList,
  AccordionToCreateContent,
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
  } = useContents();
  return (
      <PageMotion css={container}>
        <div>
            <div css={{
              top: '24px',
              position: 'sticky',
              backgroundColor: colors.white,
              paddingBottom: '32px',
              zIndex: 1,
            }}>
            <AccordionToCreateContent /> 
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
      </PageMotion>
  );
};
