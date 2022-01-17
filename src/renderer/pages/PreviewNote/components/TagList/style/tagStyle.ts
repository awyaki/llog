import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { tagStyle as base } from '~/pages/style';

export const tagStyle: CSSObject = {
  ...base,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  color: colors.cyan.DEFAULT,
};
