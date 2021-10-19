import { VFC } from 'react';
import { BlockType } from '../../Block/type';
import MiniBlocksSubContainer from  './MiniBlocskSubContainer/MiniBlocksSubContainer';
import { blocksSlicer } from './functions/blocksSlicer';
import { container } from './style';


type Props = {
  blocks: BlockType[];
};

const MiniBlocksContainer: VFC<Props> = ({ blocks }) => {
  const divided = blocksSlicer(blocks, 100);
  return (
    <div css={container}>
      {divided.map((blocks, i) => <MiniBlocksSubContainer 
                                    css={{ width: '117px', height: '117px', marginBottom: '16px' }}
                                    key={i} 
                                    className="sub"
                                    blocks={blocks} 
                                  />)}
    </div>
  );
};

export default MiniBlocksContainer;
