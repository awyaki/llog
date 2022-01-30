import { CSSObject } from '@emotion/react';
export const list: CSSObject = {
  padding: '16px',
  flexWrap: 'wrap',
  '> li': {
    width: '48%',
    marginRight: '8px',
    marginBottom: '8px',
  },
  '> li:nth-of-type(2n)': {
    marginRight: '0'
  }
};
