import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';
import { font } from '~/styleConfig/font';


export const makeContainer = (level: number): CSSObject => {
  const color = colors.cyan.LEVEL[level];

  const base: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderWidth: '1px',
    fontSize: font.size.S,
    alignItems: 'center',
  };

  const zero: CSSObject = {
    ...base,
    borderWidth: '3px',
    borderStyle: 'dashed',
    borderColor: colors.gray.DEFAULT,
  };

  const one: CSSObject = {
    ...base,
    borderStyle: 'solid',
    borderColor: colors.gray.DEFAULT,
    backgroundColor: colors.gray.LIGHT,
    color: colors.text,
  };


  const others: CSSObject = {
    ...base,
    borderStyle: 'solid',
    borderColor: color,
    backgroundColor: color,
    color: colors.white,
  };

  if (level === 0) return zero;
  if (level === 1) return one;
  return others;
};
