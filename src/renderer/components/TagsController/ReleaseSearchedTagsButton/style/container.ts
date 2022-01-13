import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  ...base,
  display: 'flex',
  justifyContent: 'center',
  border: `1px dashed ${colors.white}`,
};
