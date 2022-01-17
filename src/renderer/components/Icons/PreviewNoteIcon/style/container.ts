import { CSSObject } from '@emotion/react';
import { colors } from '~/styleConfig';

export const container: CSSObject = {
  width: '35px',
  height: '35px',
  border: `1px solid ${colors.cyan.DEFAULT}`,
  borderRadius: '30px',
  padding: '6px',
  textAlign: 'center',
};
