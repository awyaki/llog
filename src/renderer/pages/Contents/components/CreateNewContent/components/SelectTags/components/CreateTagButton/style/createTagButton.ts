import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig/colors';

export const createTagButton: CSSObject = {
  ...base,
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 10px',
  border: `1px dashed ${colors.text}`,
  marginBottom: '10px',
};
