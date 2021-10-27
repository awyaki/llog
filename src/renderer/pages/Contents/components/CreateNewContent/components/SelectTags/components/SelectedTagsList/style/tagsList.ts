import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig/colors';

export const tagsList: CSSObject = {
  maxHeight: '50px',
  overflowY: 'scroll',
  display: 'flex',
  flexWrap: 'wrap',
  paddingBottom: '10px',
  borderBottom: `1px solid ${colors.text}`,
  marginBottom: '10px',
  '> li': {
    marginRight: '10px',
    marginBottom: '10px',
  }
};
