import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { ThemeColor } from '../ThemeProvider/type';

const makeTextBoxStyle = (theme: ThemeColor) => {
  const style: CSSObject = {
    padding: '3px',
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '5px',
  };
  return style;
};

const itemContainer: CSSObject = {
  '> .title': {
    marginBottom: '20px',
  }
};

export { itemContainer, makeTextBoxStyle };
