import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';
import { tagStyle as base } from '~/pages/style/tagStyle';

export const makeContainer = (isSelected: boolean): CSSObject => {

  const baseStyle: CSSObject = {
    ...base,
    borderColor: colors.text,
    borderWidth: '1px',
  };
  
  const selectedStyle: CSSObject = {
    ...base,
    borderColor: colors.cyan.DEFAULT,
    borderWidth: '2px',
    color: colors.cyan.DEFAULT,
  };

  return isSelected ? selectedStyle : baseStyle;
};
