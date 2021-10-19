import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../../ThemeProvider/type';
import { colors } from '../../../styleConfig/colors';

const makeStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    color: colors[theme].DEFAULT,
  };

  return style;
};

export { makeStyle };
