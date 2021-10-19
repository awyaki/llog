import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';
import { font } from '../../../styleConfig/font';
import { ThemeColor } from '../../ThemeProvider/type';

const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    display: 'block',
    width: '100px',
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '23px',
    fontSize: font.size.S,
    color: colors[theme].DEFAULT,
    padding: '5px',
    textAlign: 'center',
  };

  return style;
};

export { makeStyle };
