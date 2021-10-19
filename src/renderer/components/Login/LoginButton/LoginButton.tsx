import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { ThemeColor } from '../../ThemeProvider/type';

type Props = {
  theme: ThemeColor; 
  css?: CSSObject; 
};

const LoginButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <button
      css={makeStyle(theme)}
      {...rest}
      onClick={() => {
      }}
    >
    Login
    </button>
  );
};

export default LoginButton;
