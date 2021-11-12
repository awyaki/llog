import { CSSObject } from '@emotion/react';

import { tagStyle as base } from '~/pages/style/tagStyle';
import { colors } from '~/styleConfig/colors';

export const makeTagStyle = (isSelected: boolean) => {
  const color = isSelected ? colors.cyan.DEFAULT : colors.text;

  const style: CSSObject = {
    ...base,
    color: color,
    border: `1px solid ${color}`,
  };
  return style;
};
