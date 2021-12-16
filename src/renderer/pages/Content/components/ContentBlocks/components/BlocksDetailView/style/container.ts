import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginBottom: '3px',
    marginRight: '3px',
  }
};
