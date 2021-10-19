import { VFC, useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';
import MenuButton from './MenuButton/MenuButton';
import { container, makeTitleStyle } from './style';

type Props = {
  pageName?: string; 
  css?: CSSObject;
};

const Header: VFC<Props> = ({ pageName, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <header css={container} {...rest}>
      <MenuButton />
      <h1 
        className="title"
        css={makeTitleStyle(theme)}
      >{pageName}</h1>
    </header>
  );
};

export default Header;
