import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { colors } from '../../styleConfig/colors';

const makeStyle = (isSame: boolean, color: ThemeColor): CSSObject => {
  const style: CSSObject = {
    padding: '2px',
    border: isSame ? `1px solid ${colors[color].DEFAULT}` : '',
    borderRadius: '100%',
    '> span': {
      display: 'block',
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      backgroundColor: colors[color].DEFAULT,
    }
  };

  return style;
};

export { makeStyle };
