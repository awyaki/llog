import { CSSObject} from '@emotion/react';

export const container: CSSObject = {
  width: '400px',
  maxHeight: '50px',
  overflowY: 'scroll',
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '20px',
  '> li': {
    marginRight: '8px',
    marginBottom: '8px',
  },
};
