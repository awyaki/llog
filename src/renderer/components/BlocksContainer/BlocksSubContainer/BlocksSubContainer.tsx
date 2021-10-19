import { VFC, Dispatch, SetStateAction } from 'react';
import { BlockType } from '../../Block/type';
import Block from '../../Block/Block';
import { style } from './style';
import { CSSObject } from '@emotion/react';

type Props = {
  className?: string;
  blocks: BlockType[]; 
  selectedBlocks?: string[];
  disabled?: boolean;
  setSelectedBlocks?: Dispatch<SetStateAction<string[]>>;
  css?: CSSObject;
};

const BlocksSubContainer: VFC<Props> = ({ className, selectedBlocks, blocks, setSelectedBlocks, disabled, ...rest }) => {
  return (
    <div 
      className={className} {...rest}
      css={style}
    >
      {blocks.map((block) => 
        <Block
          key={block.id}
          disabled={disabled}
          id={block.id}
          className="block"
          unit={block.unit}
          level={block.level}
          isSelected={selectedBlocks?.includes(block.id)}
          setSelectedBlocks={setSelectedBlocks}
        />
      )}
    </div>
  );
};

export default BlocksSubContainer;
