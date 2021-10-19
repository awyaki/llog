import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { font } from '../../styleConfig/font';
import { ThemeColor } from '../ThemeProvider/type';


const container: CSSObject = {
  position: 'relative',
  height: '100vh',
};

const mainContainer: CSSObject = {
  paddingLeft: '20%',
  paddingTop: '3rem',
  '> .menu': {
    marginTop: '4rem',
  }
};

const ulStyle: CSSObject = {
  '> li': {
    marginBottom:' 3rem',
  }
};

const liStyle: CSSObject = {
  color: colors.text,
  fontSize: font.size.M,
};

const makeIconStyle = (theme: ThemeColor): CSSObject => {
  const style: CSSObject = {
    display: 'block',
    width: '90px',
    height: '90px',
    borderRadius: '100%', 
    backgroundColor: colors[theme].DEFAULT,
    marginBottom: '1rem',
  };
  return style;
}; 



export { 
  container,
  mainContainer,
  ulStyle, 
  liStyle, 
  makeIconStyle,
        };
