import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { ThemeColor } from '../ThemeProvider/type';

type Props = {
  theme: ThemeColor;
  css?: CSSObject;
};

const CommitButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <button 
      className="material-icons"
      css={makeStyle(theme)}
      {...rest}
    >
      &#xE31B;
    </button>
  );
};

export default CommitButton;
