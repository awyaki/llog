import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  backgroundColor: colors.cyan.DEFAULT,
  color: colors.white,
  width: '200px',
  boxShadow: '0 0 80px -10px rgba(0,0,0,0.50)',
  borderRadius: '4px',
  position: 'absolute',
  top: '80vh',
  left: '80%',
  padding: '20px',
  zIndex: 3,
};
