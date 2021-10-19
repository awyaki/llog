import { VFC, useContext, MouseEventHandler } from 'react';
import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';


type Props = {
  css?: CSSObject;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

const DoneButton: VFC<Props> = ({ onClick, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div {...rest}>
      <button 
        onClick={onClick}
        css={{ color: colors[theme].DEFAULT }}
      >
        <span 
          css={{ display: 'block' }}
          className="material-icons"
        >&#xE876;</span>
      </button>
    </div>
  );
};

export default DoneButton;
