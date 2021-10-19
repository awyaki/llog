import { CSSObject } from '@emotion/react';

const style: CSSObject = {
  '> .block': {
    marginRight: '5px',
    marginBottom: '5px',
  },
  '> .block:nth-of-type(5n)': {
    marginRight: '0',
  }
};

export { style };
