import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';

export const makeMiniBlockStyle = (level: number): CSSObject => {
  const color = colors.cyan.LEVEL[level];

  const base: CSSObject = {
    width: '18px',
    height: '18px',
    borderWidth: '1px',
  };

  const zero: CSSObject = {
    ...base,
    borderWidth: '1px',
    backgroundColor: color,
    borderStyle: 'solid',
  };

  const others: CSSObject = {
    ...base,
    borderStyle: 'solid',
    borderColor: color,
    backgroundColor: color,
  };

  if (level === 0) return zero;
  return others;
};
