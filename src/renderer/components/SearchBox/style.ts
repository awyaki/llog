import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { ThemeColor } from '../ThemeProvider/type';


const container: CSSObject = {
  width: '80%',
  display: 'flex',
  alignItems: 'flex-end',
  color: colors.text,
};

const makeBoxStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    width: '100%',
    border: `1px solid ${colors[theme].DEFAULT}`,
    borderRadius: '5px',
    padding: '3px',
    marginRight: '10px',
  };
  
  return style;
};

export { makeBoxStyle, container };
