import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '25px',
  '> li': {
    marginRight: '8px',
    marginBottom: '8px',
  },
};
