import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { colors } from '../../styleConfig/colors';

const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    width: '36px',
    height: '36px',
    color: colors[theme].DEFAULT,
    textAlign: 'center',
  };
  return style;
};

export { makeStyle };
