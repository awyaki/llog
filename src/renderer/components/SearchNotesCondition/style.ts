import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { colors } from '../../styleConfig/colors';

const makeContentsSelectStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '5px',
    padding: '3px',
    marginBottom: '40px',
  };

  return style;
};



const makePagesSelectStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '5px',
    padding: '3px',
    marginBottom: '40px',
  };

  return style;
};


const makeKeywordsStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '5px',
    padding: '3px',
    marginBottom: '40px',
  };

  return style;
};

export { makeContentsSelectStyle, makePagesSelectStyle, makeKeywordsStyle };
