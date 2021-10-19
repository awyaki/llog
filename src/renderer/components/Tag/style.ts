import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { font } from '../../styleConfig/font';

const style: CSSObject = {
  minWidth: '3rem',
  border: `1px solid ${colors.text}`,
  borderRadius: '20px',
  padding: '5px 16px',
  color: colors.text,
  fontSize: font.size.SS,
};


export {style};
