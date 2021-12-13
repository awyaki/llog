import { CSSObject } from '@emotion/react';
import { tagStyle as base } from '~/pages/style/tagStyle';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  border: `1px dashed ${colors.text}`,
  ...base,
};
