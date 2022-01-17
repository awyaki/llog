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


export const makeCirlceContainer = (size: 'large' | 'small'): CSSObject => {
  const style: CSSObject = {
    width: changeSizeDependOnSizeString(35, 1.5, 'px', size),
    height: changeSizeDependOnSizeString(35, 1.5, 'px', size),
    border: `1px solid ${colors.cyan.DEFAULT}`,
    borderRadius: changeSizeDependOnSizeString(40, 1.5, 'px', size),
    padding: changeSizeDependOnSizeString(8, 1.5, 'px', size),
    textAlign: 'center',
  };
  

  return style;
};
