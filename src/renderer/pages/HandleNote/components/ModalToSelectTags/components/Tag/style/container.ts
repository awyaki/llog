import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';
import { tagStyle } from '~/pages/style/tagStyle';

export const container: CSSObject = {
  ...tagStyle,
  borderColor: colors.text,
  borderWidth: '1px',
};
