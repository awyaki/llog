import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { ThemeColor } from '../ThemeProvider/type';

const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    width: '48px',
    padding: '12px 0',
    borderRadius: '48px',
    backgroundColor: colors[theme].DEFAULT,
    color: colors.white,
    textAlign: 'center',
  };

  return style;
}; 

export { makeStyle };
