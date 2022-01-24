import { CSSObject } from '@emotion/react';


import { colors } from '~/styleConfig';

export const iconButton: CSSObject = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    padding: '5px',
    backgroundColor: colors.cyan.DEFAULT,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.cyan.DEFAULT,
    transition: '.25s',
    textAlign: 'center',
    color: colors.white,
    borderRadius: '4px',
    '&:hover, &:focus': {
      color: colors.cyan.DEFAULT,
      backgroundColor: colors.white,
    }
};
