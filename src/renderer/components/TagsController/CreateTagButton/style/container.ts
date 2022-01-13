import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  ...base,
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 0',
  border: `1px solid ${colors.text}`,
};
