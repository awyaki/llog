import { CSSObject } from '@emotion/react';
import { tagStyle as base } from '~/pages/style/tagStyle';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  ...base,
  borderColor: colors.cyan.DEFAULT,
  borderWidth: '1px',
  color: colors.cyan.DEFAULT,
};
