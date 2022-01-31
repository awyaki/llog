import { 
  VFC,
  } from 'react';

import { colors } from '~/styleConfig';


import { 
  SelectedTagsList,
  } from '~/components';

import {
  ExpandButton,
  TagListToSelect,
  SearchAndCreateInput,
} from './components';


export const SelectTags: VFC = () => {

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
          <SearchAndCreateInput />
          <TagListToSelect />
        </div>
      </div>
    </div>
  );
};
