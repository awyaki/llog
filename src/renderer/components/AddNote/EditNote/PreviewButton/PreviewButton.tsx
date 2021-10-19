import { VFC, useContext } from 'react';
import { colors } from '../../../../styleConfig/colors';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';


const PreviewButton: VFC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button 
        css={{ color: colors[theme].DEFAULT }}
      >
        <span 
          css={{ display: 'block', textAlign: 'center' }}
          className="material-icons"
        >&#xF1C5;</span>
      </button>
    </div>
  );
};

export default PreviewButton;
