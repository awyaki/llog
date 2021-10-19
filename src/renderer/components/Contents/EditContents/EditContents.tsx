import { useContext, useState, VFC } from 'react';
import { useParams } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import { formContainer, makeTextBoxStyle, itemContainer, cautionStyle } from './style';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import TagItems from '../../TagItems/TagItems';
import DoneButton from '../../DoneButton/DoneButton';
import BackButton from '../../BackButton/BackButton';
import DeleteContentsButton from './DeleteContentsButton/DeleteContentsButton';
import BlocksViewButton from '../BlocksViewButton/BlocksViewButton';
import DetailViewButton from '../DetailViewButton/DetailViewButton';
import EditContentsButton from '../EditContentsButton/EditContentsButton';
import NotesButton from '../NotesButton/NotesButton';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import SwitchButton from '../../SwitchButton/SwitchButton';
import { Contents } from '../../Contents/type';

type Props = {
  contentsList: Contents[];
};

const EditContents: VFC<Props> = ({ contentsList }) => {
  const { theme } = useContext(ThemeContext);
  const { contentsid } = useParams<{ contentsid: string }>();
  const contentsStub = contentsList.filter((contents) => contents.id === contentsid)[0];

  const [name, setName] = useState(contentsStub.name);
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);

  return (
    <div>
      <AppFrame pageName="Edit Contents">
        <form css={formContainer}>
          <div className="itemContainer" css={itemContainer}>
            <h2 className="title">Name</h2>
            <input css={makeTextBoxStyle(theme)} 
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <TagItems 
            tags={tags}
            setTags={setTags}
            theme={theme}
          />
          
          <h2 css={{ marginBottom: '30px' }}>Destructive Operation</h2>
          <div className="itemContainer" css={itemContainer}>
            <h3 className="title">Add Blocks</h3>
            <div css={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <input css={{...cautionStyle, marginBottom: '20px' }} />
              <SwitchButton 
                color="red"
                css={{ marginTop: '4px' }}
              />
            </div>
            <h3 className="title">Delete Contents</h3>
            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <DeleteContentsButton />
              <SwitchButton color="red" />
            </div>
          </div>
            <div css={{ display: 'flex' }}>
              <DoneButton css={{ marginRight: '32px' }}/>
              <BackButton />
            </div>
        </form>
      </AppFrame>
      <ControlPanelContainer>
        <DetailViewButton />
        <BlocksViewButton /> 
        <NotesButton />
        <AddNoteButton />
        <EditContentsButton />
      </ControlPanelContainer>
   </div> 
  );
};

export default EditContents;
