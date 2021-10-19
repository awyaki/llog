import { VFC, MouseEventHandler } from 'react';
import { ThemeColor } from '../../ThemeProvider/type';
import { colors } from '../../../styleConfig/colors';

type Props = {
  theme: ThemeColor; 
  onClick: MouseEventHandler<HTMLButtonElement> ;
};

const ExpandButton: VFC<Props> = ({ theme, onClick }) => {
  return (
      <button 
        className="material-icons"
        onClick={onClick}
        css={{ color: colors[theme].DEFAULT }}
      >&#xE5D7;
      </button>
  );
};

export default ExpandButton;
