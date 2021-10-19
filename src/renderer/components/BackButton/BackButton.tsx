import { VFC, useContext } from 'react';
import { colors } from '../../styleConfig/colors';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { useHistory } from 'react-router-dom';

const BackButton: VFC = () => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <button 
        css={{ color: colors[theme].DEFAULT, textAlign: 'center' }}
        onClick={(e) => {
          e.preventDefault();
          history.goBack();
        }}
      >
        <span 
          css={{ display: 'block' }}
          className="material-icons"
        >&#xE166;</span>
      </button>
    </div>
  );
};

export default BackButton;
