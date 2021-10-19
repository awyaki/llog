import { CSSObject } from '@emotion/react';
import { font } from '../../styleConfig/font';
import { colors } from '../../styleConfig/colors';
import { Level } from './type';
import { ThemeColor } from '../ThemeProvider/type';


const makeStyle = (theme: ThemeColor, level: Level, isSelected?: boolean): CSSObject => {

  const anitColor: { [k in ThemeColor]: ThemeColor } = {
    cyan: 'orange',
    orange: 'cyan',
  };

  const base: CSSObject = {
    width: '36px',
    height: '36px',
    backgroundColor: colors[theme].LEVEL[level],
    fontSize: font.size.S,
    textAlign: 'center',
    borderRadius: '4px',
  };

  if (isSelected) {
    const levelZeroStyle: CSSObject = {
      ...base,
      border: `2px solid ${colors[anitColor[theme]].DEFAULT}`,
      color: colors.text,
    };
  

    const othersStyle: CSSObject = {
      ...base,
      border: `2px solid ${colors[anitColor[theme]].DEFAULT}`,
      color: level === 1 ? colors.text : colors.white, 
    };

    return level === 0 ? levelZeroStyle : othersStyle ;
  }


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
