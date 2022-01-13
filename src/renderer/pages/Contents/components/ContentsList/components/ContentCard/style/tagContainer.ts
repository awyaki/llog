import { CSSObject } from '@emotion/react';

export const tagContainer: CSSObject = {
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '3px',
    marginBottom: '3px',
  }
};
