import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';
import { font } from '../../../styleConfig/font';
import { ThemeColor } from '../../ThemeProvider/type';

const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    display: 'block',
    width: '90px',
    textAlign: 'center',
    borderRadius: '1rem',
    border: `1px solid ${colors[theme].DEFAULT}`,
    fontSize: font.size.SS,
    color: colors[theme].DEFAULT,
    padding: '.25rem',
  };
  return style;
};

export { makeStyle };
