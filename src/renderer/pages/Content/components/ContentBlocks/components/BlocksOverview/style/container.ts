import { CSSObject } from '@emotion/react';

export const container: CSSObject = {
  width: '100%',
  maxHeight: '67vh',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginBottom: '1px',
    marginRight: '1px',
  }
};
