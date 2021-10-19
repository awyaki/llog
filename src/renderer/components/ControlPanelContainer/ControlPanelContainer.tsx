import { FC, useState, useContext } from 'react';
import { CSSObject } from '@emotion/react';
import { expandedStyle, foldedStyle } from './style';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import ExpandButton from './ExpandButton/ExpandButton';
import FoldButton from './FoldButton/FoldButton';

type Props = {
  css?: CSSObject; 
};

const ControlPanelContainer: FC<Props> = ({ children, ...rest }) => {
  const [isFolded, setIsFolded] = useState(true);
  const { theme } = useContext(ThemeContext);
  const folded = (
    <div css={foldedStyle} {...rest}>
      <ExpandButton 
        theme={theme} 
        onClick={() => setIsFolded(false)}
      />
    </div>);

  const expanded = (
    <div css={expandedStyle} {...rest}>
      {children}
      <FoldButton 
        theme={theme}
        onClick={() => setIsFolded(true)}
      />
    </div>);

  return isFolded ? folded : expanded; 
};

export default ControlPanelContainer;
