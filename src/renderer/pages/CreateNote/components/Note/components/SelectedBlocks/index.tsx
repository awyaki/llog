import { VFC } from 'react';

import { Block as BlockType } from '@prisma/client';

import { Block } from './components/Block';

import { container } from './style/container';

type Props = {
  blocks: BlockType[];
};

export const SelectedBlocks: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, level, unitNumber }) => <li key={id}><Block level={level} unitNumber={unitNumber} /></li>)}
    </ul>
  );
};
