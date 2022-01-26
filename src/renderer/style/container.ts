import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  width: '100%',
  height: '100vh',
  minWidth: '800px',
  minHeight: '400px',
  color: colors.text,
  display: 'flex',
};
