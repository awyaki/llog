import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '9px',
    marginBottom: '9px',
  },
  '> li:nth-of-type(3n)': {
    marginRight: '0',
  },
};
