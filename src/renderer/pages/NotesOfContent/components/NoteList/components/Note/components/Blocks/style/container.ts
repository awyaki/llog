import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  '> li': {
    marginBottom: '8px',
  },
};
