import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${colors.gray.LIGHT}`,
};
