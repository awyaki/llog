import { useContext } from 'react';
import AppFrame from '../AppFrame/AppFrame'; 
import SwitchButton from '../SwitchButton/SwitchButton';
import ColorPallet from '../ColorPallet/ColorPallet';
import { font } from '../../styleConfig/font';
import { colors } from '../../styleConfig/colors';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';


const Settings = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AppFrame pageName="Settings">
      <div css={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h2 css={{ color: colors.text, fontSize: font.size.M }}>
          Dark Mode
        </h2>
        <SwitchButton color={theme} />
      </div>
      
      <div>
        <h2 css={{ color: colors.text, fontSize: font.size.M, marginBottom: '15px' }}>
          Theme Color
        </h2>
        <div css={{ display: 'flex' }}>
          <ColorPallet 
          color="orange"
          css={{ marginRight: '10px' }}
          />
          <ColorPallet 
            color="cyan" 
          />
      </div>
    </div>
    </AppFrame>
  );
};

export default Settings;
