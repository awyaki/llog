import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { tagStyle as base } from '~/pages/style';

export const makeTagStyle = (isSelected: boolean): CSSObject => {
  const defaultStyle: CSSObject = {
    ...base,
    border: `1px solid ${colors.cyan.DEFAULT}`,
    color: colors.cyan.DEFAULT,
  };
  
  const selected: CSSObject = {
    ...defaultStyle,
    border: `2px solid ${colors.cyan.DEFAULT}`,
  };
  return isSelected ? selected : defaultStyle;
};
