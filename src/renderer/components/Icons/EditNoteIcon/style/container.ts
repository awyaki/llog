import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig';


const changeSizeDependOnSizeString = (
  defaultValue: number,
  scale: number,
  unit: string,
  size: 'large' | 'small',
) => {
  switch (size) {
    case 'small': {
      return `${defaultValue}${unit}`
    }
    case 'large': {
      return `${defaultValue * scale}${unit}`
    }
    default: {
      return `${defaultValue}${unit}`
    }
  }
};


export const makeContainer = (size: 'large' | 'small'): CSSObject => {
  const style: CSSObject = {
    width: changeSizeDependOnSizeString(35, 3, 'px', size),
    height: changeSizeDependOnSizeString(35, 3, 'px', size),
    border: `1px solid ${colors.cyan.DEFAULT}`,
    borderRadius: changeSizeDependOnSizeString(35, 3, 'px', size),
    padding: changeSizeDependOnSizeString(6, 3, 'px', size),
    textAlign: 'center',
  };
  

  return style;
};
