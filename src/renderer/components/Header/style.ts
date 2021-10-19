import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { font } from '../../styleConfig/font';
import { ThemeColor } from '../ThemeProvider/type';

const container: CSSObject = {
  width: '100%',
  height: '10vh',
  padding: '1rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  '> .title': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const makeTitleStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    fontSize: font.size.M,
    color: colors[theme].DEFAULT,
  };
  return style;
}; 

export { container, makeTitleStyle };
