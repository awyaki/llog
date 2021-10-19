import { VFC, useContext } from 'react';
import { colors } from '../../../styleConfig/colors';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { CSSObject } from '@emotion/react';

type Props = {
  css?: CSSObject;
};

const NotesButton: VFC<Props> = ({ ...rest }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button 
      className="material-icons" 
      css={{ color: colors[theme].DEFAULT }}
      {...rest}
    >
      &#xE873;
    </button>
  );
};

export default NotesButton;
