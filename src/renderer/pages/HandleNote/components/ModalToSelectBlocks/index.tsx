import { VFC } from 'react';
import { Block as BlockType } from '@prisma/client';

import { container } from './style';

import { Block } from './components/Block';

type Props = {
  blocks: BlockType[];
};

export const SelectBlocks: VFC<Props> = ({ blocks }) => {
  return (
      <ul css={container}>
        {blocks.map((block) => <li key={block.id}><Block block={block} /></li>)}
      </ul>
  );
};
