import { VFC, useContext } from 'react';
import { CSSObject } from '@emotion/react';
import { makeStyle } from './style';
import { Level } from '../Block/type';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

type Props = {
  css?: CSSObject;
  className?: string;
  level: Level;
};

const MiniBlock: VFC<Props> = ({ level, className, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={className}
      css={makeStyle(theme, level)} {...rest}>
    </div>
  );
};

export default MiniBlock;
