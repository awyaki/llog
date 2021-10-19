import { VFC } from 'react';
import { Link } from 'react-router-dom';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { ThemeColor } from '../../ThemeProvider/type';

type Props = {
  theme: ThemeColor; 
  css?: CSSObject;
};

const SetConditionButton: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <Link 
      to="notes/search"
      className="material-icons"
      css={makeStyle(theme)}
      {...rest}
      >
      &#xF02F;
    </Link>
  );
};

export default SetConditionButton;
