import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { Level } from '../Block/type';
import { ThemeColor } from '../ThemeProvider/type';



const makeStyle = (theme: ThemeColor, level: Level): CSSObject => {
  const base: CSSObject = {
    display: 'inline-block',
    width: '9px',
    height: '9px',
    backgroundColor: colors[theme].LEVEL[level],
  };

  const levelZeroStyle: CSSObject = {
    ...base,
    border: '1px dashed',
    borderColor: colors.gray.LIGHT,
    color: colors.text,
  };
  
  const othersStyle: CSSObject = {
    ...base,
    border: '1px solid',
    borderColor: level === 1 ? colors.gray.LIGHT : colors[theme].LEVEL[level],
    color: level === 1 ? colors.text : colors.white, 
  };
  

  return level === 0 ? levelZeroStyle : othersStyle;
};

export { makeStyle };
