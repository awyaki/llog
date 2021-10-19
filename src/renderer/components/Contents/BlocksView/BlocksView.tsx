import { VFC, memo } from 'react';
import { useParams } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import BlocksContainer from '../../BlocksContainer/BlocksContainer';
import DetailViewButton from '../DetailViewButton/DetailViewButton';
import NotesButton from '../NotesButton/NotesButton';
import EditContentsButton from '../EditContentsButton/EditContentsButton';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import { Contents } from '../type';


type Props = {
  contentsList: Contents[];
};

const BlocksView: VFC<Props> = memo(({ contentsList }) => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const contentsStub = contentsList.filter((contents) => contents.id === contentsid)[0];
  return (
    <div>
      <AppFrame pageName="Contents">
        <BlocksContainer blocks={contentsStub.blocks} disabled />
      </AppFrame>
      <ControlPanelContainer>
        <DetailViewButton />
        <NotesButton />
        <AddNoteButton />
        <EditContentsButton />
      </ControlPanelContainer>
    </div>
  );
});

export default BlocksView;
