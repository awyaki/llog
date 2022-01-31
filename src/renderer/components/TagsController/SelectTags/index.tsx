import { 
  VFC,
  useContext
  } from 'react';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { 
  SearchIcon,
  SelectedTagsContext,
  SelectedTagsList,
  } from '~/components';

import {
  ExpandButton,
  TagListToSelect,
} from './components';


export const SelectTags: VFC = () => {
  
  const { 
    searchQuery,
    setSearchQueryAction,
    } = useContext(SelectedTagsContext);


  return (
    <div css={{
    }}>
      <ExpandButton 
        css={{
          marginBottom: '8px',
        }}
        onClick={() => {}} />
      <SelectedTagsList css={{ marginBottom: '16px' }} />
      <div>

        <div css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQueryAction(e.target.value)}
            css={{
                width: '200px',
                borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
              }}
              type="text" />
          <SearchIcon />
        </div>
        <TagListToSelect />

      </div>
    </div>
  );
};
