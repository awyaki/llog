import { CSSObject } from '@emotion/react';
import { colors } from '../../../styleConfig/colors';
import { font } from '../../../styleConfig/font';
import { ThemeColor } from '../../ThemeProvider/type';


const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    width: '36px',
    height: '36px',
    position: 'relative',
    fontSize: font.size.S,
    textAlign: 'center',
    borderRadius: '4px',
    border: `1px dashed ${colors[theme].DEFAULT}`,
  };

  return style;
};

const makeEditIconStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: colors[theme].DEFAULT,
  };

  return style;
};

export { makeStyle, makeEditIconStyle };
