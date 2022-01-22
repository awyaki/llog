import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig';

export const buttonStyle: CSSObject = {
  ...base,
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 0',
  border: `1px solid ${colors.cyan.DEFAULT}`,
  color: colors.cyan.DEFAULT
};
