import { VFC, Dispatch, SetStateAction } from 'react';
import { CSSObject } from '@emotion/react';
import { BlockType } from '../Block/type';
import BlocksSubContainer from  './BlocksSubContainer/BlocksSubContainer';
import { blocksSlicer } from './functions/blocksSlicer';


type Props = {
  css?: CSSObject;
  blocks: BlockType[];
  selectedBlocks?: string[];
  setSelectedBlocks?: Dispatch<SetStateAction<string[]>>;
  disabled?: boolean;
};

const BlocksContainer: VFC<Props> = ({ blocks, selectedBlocks, setSelectedBlocks, disabled, ...rest }) => {
  const divided = blocksSlicer(blocks, 25);
  return (
    <div css={{ height: '70vh', overflowY: 'scroll' }} {...rest}>
      {divided.map((blocks, i) => <BlocksSubContainer 
                                    css={{ width: '200px', margin: '0 auto 32px auto' }}
                                    key={i} 
                                    disabled={disabled}
                                    selectedBlocks={selectedBlocks}
                                    setSelectedBlocks={setSelectedBlocks}
                                    className="sub"
                                    blocks={blocks} 
                                  />)}
    </div>
  );
};

export default BlocksContainer;
