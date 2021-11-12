import { VFC } from 'react';

import { container } from './style/container';
import { title } from './style/title';

import { BlocksOverview } from './components/BlocksOverview';
import { BlocksDetailView } from './components/BlocksDetailView';

type Props = {
  mode: 'detailview' | 'overview';
};

export const ContentBlocks: VFC<Props> = ({ mode }) => {
  return (
    <div css={container}>
      <h2 css={title}>Blocks</h2>
      {mode === 'overview' ? <BlocksOverview /> : <BlocksDetailView />}
    </div>
  );
};
