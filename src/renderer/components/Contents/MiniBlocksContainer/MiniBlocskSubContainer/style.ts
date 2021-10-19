import { CSSObject } from '@emotion/react';

const style: CSSObject = {
  '> .block': {
    marginRight: '3px',
    marginBottom: '3px',
  },
  '> .block:nth-of-type(10n)': {
    marginRight: '0',
  }
};

export { style };
