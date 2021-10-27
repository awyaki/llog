import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';

import { colors } from '~/styleConfig/colors';

export const createTagButton: CSSObject = {
  ...base,
  border: `1px dashed ${colors.text}`,
  marginBottom: '10px',
};
