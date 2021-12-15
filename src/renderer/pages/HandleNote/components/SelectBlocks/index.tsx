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
        {blocks.map(({ id, level, unitNumber }) => <li key={id}><Block level={level} unitNumber={unitNumber}/></li>)}
      </ul>
  );
};
