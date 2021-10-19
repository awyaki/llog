import { VFC } from 'react';
import { makeStyle } from './style';
import { ThemeColor } from '../../ThemeProvider/type';
import { CSSObject } from '@emotion/react';

type Props = {
  theme: ThemeColor;
  css?: CSSObject;
};

const LogoutButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <button 
      css={makeStyle(theme)} {...rest}
      onClick={() => {
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
