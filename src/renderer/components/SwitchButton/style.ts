import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { ThemeColor } from '../ThemeProvider/type';

const makeContainer = (isOn: boolean, theme: ThemeColor | 'red'): CSSObject => {
  const style: CSSObject = {
    display: 'flex',
    justifyContent: isOn ? 'flex-end' : 'flex-start',
    width: '40px',
    border: `1px solid ${isOn ? colors[theme].DEFAULT : colors.gray.LIGHT }`,
    borderRadius: '9999px',
    padding: '2px',
    '> .circle': {
      display: 'block',
      width: '1rem',
      height: '1rem',
      backgroundColor: isOn ? colors[theme].DEFAULT : colors.gray.LIGHT,
      borderRadius: '9999px',
    }
  };

  return style; 
};

export { makeContainer };
