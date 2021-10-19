import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { Link } from 'react-router-dom';
import { colors } from '../../styleConfig/colors'; 
import { font } from '../../styleConfig/font';
import { container, mainContainer, ulStyle, liStyle, makeIconStyle } from './style';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import LogoutButton from './LogoutButton/LogoutButton';
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer';


const Menu = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div css={container}>
      <main css={mainContainer}>
        <div 
          className="icon"
        >
          <span css={makeIconStyle(theme)}></span>
        </div>
        <span css={{ display: 'block', color: colors.text, fontSize: font.size.S }}>
          sample name
        </span>
        <ul 
          className="menu"
          css={ulStyle}
        >
          <li css={liStyle}>
            <Link to="timeline">Time Line</Link>
          </li>
          <li css={liStyle}>
            <Link to="review">Review</Link>
          </li>
          <li css={liStyle}>
            <Link to="notes">Notes</Link>
          </li>
          <li css={liStyle}>
            <Link to="contents">Contents</Link>
         </li>
          <li css={liStyle}>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
        <LogoutButton theme={theme} />
      </main>
      <ControlPanelContainer>
        <AddNoteButton theme={theme} />
      </ControlPanelContainer>
    </div>
  );
};

export default Menu;
