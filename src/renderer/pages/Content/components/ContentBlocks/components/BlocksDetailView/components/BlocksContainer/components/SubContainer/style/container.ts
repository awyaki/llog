import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '210px',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '3px',
    marginBottom: '3px',
  },
  '> li:nth-of-type(10n)': {
    marginRight: '0',
  },
};
