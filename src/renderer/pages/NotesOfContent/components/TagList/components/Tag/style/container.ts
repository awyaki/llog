import { CSSObject } from '@emotion/react';
import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  ...base,
  border: `1px solid ${colors.text}`,
}; 
