import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '5px',
    marginBottom: '5px',
  }
};
