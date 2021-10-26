import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig/colors';

export const tagsList: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  paddingBottom: '10px',
  borderBottom: `1px solid ${colors.text}`,
  '> li': {
    marginRight: '8px',
    marginBottom: '8px',
  }
};
