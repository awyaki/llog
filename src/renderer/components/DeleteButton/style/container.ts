import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';


export const makeContainer = (disabled: boolean): CSSObject => {
  const base: CSSObject = {
    width: '90px',
    padding: '5px 8px',
    borderWidth: '2px',
    backgroundColor: colors.white,
    borderRadius: '4px',
    transition: '.3s',
  };

  const disabledStyle: CSSObject = {
    ...base,
    borderColor: colors.text,
    color: colors.text,
  };
  
  const normal: CSSObject = {
    ...base,
    borderColor: colors.red.DEFAULT,
    color: colors.red.DEFAULT,
    '&:hover': {
      backgroundColor: colors.red.DEFAULT,
      color: colors.text,
    },
  };
  
  return disabled ? disabledStyle : normal;
};
