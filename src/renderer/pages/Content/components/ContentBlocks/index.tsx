import { VFC } from 'react';

import { Block } from '@prisma/client';

import { container } from './style/container';
import { title } from './style/title';

import { BlocksOverview } from './components/BlocksOverview';
import { BlocksDetailView } from './components/BlocksDetailView';

type Props = {
  mode: 'detailview' | 'overview';
  blocks: Block[];
};

export const ContentBlocks: VFC<Props> = ({ mode, blocks }) => {
  return (
    <div css={container}>
      <h2 css={title}>Blocks</h2>
      {mode === 'overview' ? <BlocksOverview blocks={blocks} /> : <BlocksDetailView blocks={blocks} />}
    </div>
  );
};
