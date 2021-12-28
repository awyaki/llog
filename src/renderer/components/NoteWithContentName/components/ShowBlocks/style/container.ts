import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '80px',
  minWidth: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  '> li': {
    marginBottom: '3px',
  }
};
