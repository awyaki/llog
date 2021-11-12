import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '648px',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '3px',
    marginBottom: '3px',
  },
  '> li:nth-of-type(5n)': {
    marginRight: '20px',
  },
};
