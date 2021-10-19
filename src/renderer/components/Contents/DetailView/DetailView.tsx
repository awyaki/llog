import { VFC, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppFrame from '../../AppFrame/AppFrame';
import BasicInfo from './BasicInfo/BasicInfo';
import LevelInfo from './LevelInfo/LevelInfo';
import MiniBlocksContainer from '../MiniBlocksContainer/MiniBlocksContainer';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import BlocksViewButton from '../BlocksViewButton/BlocksViewButton';
import EditContentsButton from '../EditContentsButton/EditContentsButton';
import NotesButton from '../NotesButton/NotesButton';
import AddNoteButton from '../AddNoteButton/AddNoteButton';
import { colors } from '../../../styleConfig/colors';
import { Contents } from '../../Contents/type';


const DetailView: VFC = () => {
  const { contentsid } = useParams<{ contentsid: string }>();
  const [contents, setContents] = useState<Contents | undefined>(undefined);


  if (contents === undefined) return <></>;
  
  return (
    <div>
      <AppFrame pageName="Contents">
        <div>
          <h2 css={{ marginBottom: '32px', color: colors.text }}>{contents.name}</h2>
          <BasicInfo 
            css={{ marginBottom: '16px' }}
            creation={contents.createdAt}
            latestCommit={new Date(contents.commitedAt)}
            blocks={contents.blocks.length}
            streak={10}
          />
          <LevelInfo 
            css={{ marginBottom: '32px' }}
            blocks={contents.blocks}
          />
          <MiniBlocksContainer blocks={contents.blocks} />
        </div>
      </AppFrame>
      <ControlPanelContainer>
        <BlocksViewButton /> 
        <NotesButton />
        <AddNoteButton />
        <EditContentsButton />
      </ControlPanelContainer>
    </div>
  );
};

export default DetailView;
