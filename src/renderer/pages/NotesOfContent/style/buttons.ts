import { CSSObject } from '@emotion/react'

export const buttons: CSSObject = {
    display: 'flex',
    marginBottom: '32px',
    '> li': {
      marginRight: '8px',
    },
    '> li:nth-last-of-type(1)': {
      marginRight: '0',
    }
};
