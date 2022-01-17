import { CSSObject } from '@emotion/react';

export const buttons: CSSObject = {
  display: 'flex',
  justifyContent: 'flex-end',
  '> li': {
    marginLeft: '4px',
  },
  '> li:nth-of-type(1)': {
    marginLeft: '0',
  }
};
