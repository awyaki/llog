import { CSSObject } from '@emotion/react';
import { font } from '../../../../../styleConfig/font';
import { colors } from '../../../../../styleConfig/colors';

const tableStyle: CSSObject = {
  color: colors.text,
  fontSize: font.size.SS,
  'th': {
    paddingRight: '32px',
  },
};

const tableHeadStyle: CSSObject = {
  paddingRight: '32px',
  paddingBottom: '5px',
};

export { tableStyle, tableHeadStyle };
