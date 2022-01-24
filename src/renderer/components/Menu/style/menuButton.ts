import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig';

export const menuButton: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '20px',
  padding: '5px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.white,
  color: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  textAlign: 'center',
  transition: '.25s',
  '&:hover, &:focus': {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
};
