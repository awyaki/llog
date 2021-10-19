import { VFC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import AppFrame from '../AppFrame/AppFrame';
import DoneButton from '../DoneButton/DoneButton'; 
import BlocksContainer from '../BlocksContainer/BlocksContainer';
import { BlockType } from '../Block/type';


type Props = {
  contentsId: string;
  blocks: BlockType[];
  selectedBlocks: string[];
  setSelectedBlocks: Dispatch<SetStateAction<string[]>>
};

const EditBlocks: VFC<Props> = ({ contentsId, blocks, selectedBlocks, setSelectedBlocks }) => {
  return (
    <div>
      <AppFrame>
        <BlocksContainer 
          css={{ marginBottom: '32px' }}
          blocks={blocks}
          selectedBlocks={selectedBlocks}
          setSelectedBlocks={setSelectedBlocks}
        />
        
      <Link 
        to={`/note/add/${contentsId}`}
        css={{ width: '100%', textAlign: 'center' }}
      >
        <DoneButton />
      </Link>
      </AppFrame>
    </div>
  );
};

export default EditBlocks;
