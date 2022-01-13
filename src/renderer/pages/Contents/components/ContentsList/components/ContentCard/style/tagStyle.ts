import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { tagStyle as base } from '~/pages/style';

export const tagStyle: CSSObject = {
  ...base,
  borderColor: colors.text,
  borderWidth: '1px',
  backgroundColor: colors.white,
};
