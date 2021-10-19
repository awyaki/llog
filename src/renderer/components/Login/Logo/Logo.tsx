import { VFC } from 'react';
import { ThemeColor } from '../../ThemeProvider/type';
import { CSSObject } from '@emotion/react';
import { style } from './style';
import LogoCyan from './logo_cyan.svg';
import LogoOrange from './logo_orange.svg';

type Props = {
  css?: CSSObject;
  width: string;
  theme: ThemeColor;
};

const LogoImg: { [k in ThemeColor]: string } = {
  cyan: LogoCyan,
  orange: LogoOrange,
};

const Logo: VFC<Props> = ({ theme, width, ...rest }) => {
  return (
    <img 
      css={style}
      src={LogoImg[theme]} 
      width={width} 
      {...rest}
      alt="logo mark"
    />
  );
};

export default Logo;
