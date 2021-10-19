import { CSSObject } from '@emotion/react';
import { font } from '../../../styleConfig/font';
import { colors } from '../../../styleConfig/colors';
import { ThemeColor } from '../../ThemeProvider/type';

const formContainer: CSSObject = {
  color: colors.text, 
  fontSize: font.size.M, 
  '> .itemContainer': {
    marginBottom: '40px',
  },
  '> .itemContainer:last-child': {
    marginBottom: '0',
  }
};

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

const cautionStyle: CSSObject = {
    width: '6rem',
    padding: '3px',
    border: `1px solid ${colors.red.DEFAULT}`,
    borderRadius: '5px',
};


export { formContainer, makeTextBoxStyle, itemContainer, cautionStyle };
