import { CSSObject} from '@emotion/react';

export const container: CSSObject = {
  width: '400px',
  display: 'flex',
  flexWrap: 'wrap',
  '> li': {
    marginRight: '8px',
    marginBottom: '8px',
  },
};
