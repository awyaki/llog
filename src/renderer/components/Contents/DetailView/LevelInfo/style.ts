import { CSSObject } from '@emotion/react';
import { colors } from '../../../../styleConfig/colors';
import { font } from '../../../../styleConfig/font';

const container: CSSObject = {
  color: colors.text,
  fontSize: font.size.SS,
};


const unitContainer: CSSObject = {
  maxWidth: '250px',
  display: 'flex',
  justifyContent: 'space-between',
};

export { container, unitContainer };
