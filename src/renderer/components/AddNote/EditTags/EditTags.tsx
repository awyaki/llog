import { useContext, Dispatch, SetStateAction, VFC } from 'react';
import { Link } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import TagItems from '../../TagItems/TagItems';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import DoneButton from '../../DoneButton/DoneButton';
import BackButton from '../../BackButton/BackButton';
import { ThemeContext } from '../../ThemeProvider/ThemeProvider';

type Props = {
  tags: { id: number, name: string }[];
  setTags: Dispatch<SetStateAction<{ id: number, name: string }[]>>;
  contentsId: string;
};

const EditTags: VFC<Props> = ({ contentsId, tags, setTags }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <AppFrame>
        <TagItems 
          theme={theme}
          tags={tags}
          setTags={setTags}
          css={{ maxHeight: '60vh', marginBottom: '32px' }}
        />
      <Link to={`/note/add/${contentsId}`}>
        <DoneButton />
      </Link>
    </AppFrame>
    <ControlPanelContainer>
      <BackButton />
    </ControlPanelContainer>
    </div>
  );
};

export default EditTags;
