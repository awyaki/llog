import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig';

export const cancel: CSSObject = {
  ...base,
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px 0',
  border: `1px solid ${colors.red.DEFAULT}`,
  color: colors.red.DEFAULT,
};
