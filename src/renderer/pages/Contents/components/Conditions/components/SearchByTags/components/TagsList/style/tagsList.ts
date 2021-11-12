import { CSSObject } from '@emotion/react';

export const tagsList: CSSObject = {
  maxHeight: '150px',
  overflowY: 'scroll',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '10px',
    marginBottom: '10px',
  },
};
