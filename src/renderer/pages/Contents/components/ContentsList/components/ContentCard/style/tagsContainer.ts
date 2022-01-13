import { CSSObject } from '@emotion/react';

export const tagsContainer: CSSObject = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  '> li': {
    marginRight: '4px',
    marginBottom: '4px',
  }
};
