import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { tagStyle as base } from '~/pages/style';

export const tagStyle: CSSObject = {
  ...base,
  border: `1px solid ${colors.cyan.DEFAULT}`,
};
