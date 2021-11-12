import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  marginBottom: '32px',
  '> li': {
    marginBottom: '8px',
  },
  '> li:nth-last-of-type(1)': {
    marginBottom: '0',
  }
};
