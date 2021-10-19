import { VFC, useContext } from 'react';
import { CSSObject } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { ThemeColor } from '../ThemeProvider/type';
import { makeStyle } from './style';



type Props = {
  color: ThemeColor; 
  css?: CSSObject;
};

const ColorPallet: VFC<Props> = ({ color, ...rest }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isSame = theme === color;

  return (
    <button 
      css={makeStyle(isSame, color)} {...rest}
      onClick={() => setTheme(color)}
    >
      <span className="filledCircle"></span>
    </button>
  );
};

export default ColorPallet;
