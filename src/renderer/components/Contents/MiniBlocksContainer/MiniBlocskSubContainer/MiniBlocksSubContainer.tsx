import { VFC } from 'react';
import { BlockType } from '../../../Block/type';
import MiniBlock from '../../../MiniBlock/MiniBlock';
import { style } from './style';
import { CSSObject } from '@emotion/react';
import { toLevel } from '../../../../functions/toLevel';

type Props = {
  className?: string;
  blocks: BlockType[]; 
  css?: CSSObject;
};

const MiniBlocksSubContainer: VFC<Props> = ({ className, blocks, ...rest }) => {
  return (
    <div 
      className={className} {...rest}
      css={style}
    >
      {blocks.map((block) => 
        <MiniBlock
          key={block.id}
          className="block"
          level={toLevel(block.iteration, block.commitedAt)}
        />
      )}
    </div>
  );
};

export default MiniBlocksSubContainer;
