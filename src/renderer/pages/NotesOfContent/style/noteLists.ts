import { CSSObject } from '@emotion/react';

export const noteLists: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  '> li': {
    width: '50%',
    marginRight: '32px',
  },
  '> li:nth-of-type(2)': {
    marginRight: '0',
  },
};
