import { CSSObject } from '@emotion/react';

import { font } from '~/styleConfig/font';
import { colors } from '~/styleConfig/colors';

export const selected: CSSObject = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    border: `1px solid ${colors.blue.DEFAULT}`,
    fontSize: font.size.S,
    alignItems: 'center',
  };
