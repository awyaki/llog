import { useContext } from 'react';
import AppFrame from '../AppFrame/AppFrame';
import ControlPanelContainer from '../ControlPanelContainer/ControlPanelContainer';
import Note from '../Note/Note';
import SetConditionButton from './SetConditionButton/SetConditionButton';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { notes } from '../../stub/notesStub';
import { font } from '../../styleConfig/font';
import { colors } from '../../styleConfig/colors';

const NotesList = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div>
      <AppFrame pageName="Notes">
        <div css={{ color: colors.text, fontSize: font.size.SS, marginBottom: '32px' }}>
          <div css={{ marginBottom: '8px' }}>Contents: ECMAScript 2021</div>
          <div css={{ marginBottom: '8px' }}>Tags: spec, JavaScript</div>
          <div>keywords: None</div>
        </div>
        {notes.map((note) => <Note 
                              key={note.id}
                              css={{ marginBottom: '36px' }}
                              note={note}
                              />)}
      </AppFrame>
      <ControlPanelContainer>
        <SetConditionButton theme={theme} />
      </ControlPanelContainer>
    </div>
  );
};

export default NotesList;
