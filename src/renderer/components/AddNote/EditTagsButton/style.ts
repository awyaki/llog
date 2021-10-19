import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';
import { font } from '../../../styleConfig/font';

const style: CSSObject = {
  height: '25px',
  position: 'relative',
  minWidth: '4.5rem',
  border: `1px dashed ${colors.text}`,
  borderRadius: '20px',
  padding: '5px 16px',
  textAlign: 'center',
};


const editIconStyle: CSSObject = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: colors.text,
  fontSize: font.size.M,
  transform: 'translate(-50%, -50%)'
};

export { style, editIconStyle };
