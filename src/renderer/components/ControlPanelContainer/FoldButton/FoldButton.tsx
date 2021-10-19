import { VFC, MouseEventHandler } from 'react';
import { ThemeColor } from '../../ThemeProvider/type';
import { colors } from '../../../styleConfig/colors';

type Props = {
  theme: ThemeColor; 
  onClick: MouseEventHandler<HTMLButtonElement> ;
};

const FoldButton: VFC<Props> = ({ theme, onClick }) => {
  return (
      <button 
        className="material-icons"
        onClick={onClick}
        css={{ color: colors[theme].DEFAULT }}
      >&#xE5D6;
      </button>
  );
};

export default FoldButton;
