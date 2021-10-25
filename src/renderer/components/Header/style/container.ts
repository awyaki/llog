import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig/colors';

export const container: CSSObject = {
  width: '100%',
  display: 'flex',
  padding: '16px 5% 16px 5%',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${colors.gray.LIGHT}`,
};
