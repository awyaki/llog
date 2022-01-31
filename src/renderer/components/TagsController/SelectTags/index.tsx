import { 
  VFC,
  useContext,
  useMemo
  } from 'react';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { 
  SelectedTagsList,
  } from '~/components';

import {
  ExpandButton,
  TagListToSelect,
  CreateInput,
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
          <CreateInput />
          <TagListToSelect />
        </div>
      </div>
    </div>
  );
};
