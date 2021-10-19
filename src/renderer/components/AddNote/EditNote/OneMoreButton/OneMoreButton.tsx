import { VFC, useContext } from 'react';
import { colors } from '../../../../styleConfig/colors';
import { ThemeContext } from '../../../ThemeProvider/ThemeProvider';


const OneMoreButton: VFC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button 
        css={{ color: colors[theme].DEFAULT, textAlign: 'center' }}
      >
        <span 
          css={{ display: 'block' }}
          className="material-icons"
        >&#xE5E1;</span>
      </button>
    </div>
  );
};

export default OneMoreButton;
