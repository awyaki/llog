import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';
import { font } from '~/styleConfig/font';


export const makeContainer = (
  level: number,
  isSelected: boolean = false
): CSSObject => {
  const borderColor = isSelected ? colors.blue.DEFAULT : colors.cyan.LEVEL[level];
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
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: isSelected ? colors.blue.DEFAULT : colors.text,
  };

  const one: CSSObject = {
    ...base,
    borderStyle: 'solid',
    borderColor: isSelected ? colors.blue.DEFAULT : colors.gray.DEFAULT,
    backgroundColor: colors.gray.LIGHT,
    color: colors.text,
  };


  const others: CSSObject = {
    ...base,
    borderStyle: 'solid',
    borderColor: borderColor,
    backgroundColor: color,
    color: colors.white,
  };

  if (level === 0) return zero;
  if (level === 1) return one;
  return others;
};
