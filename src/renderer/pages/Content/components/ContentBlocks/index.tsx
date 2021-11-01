import { VFC } from 'react';

import { container } from './style/container';
import { title } from './style/title';

import { BlocksOverview } from './components/BlocksOverview';

export const ContentBlocks: VFC = () => {
  return (
    <div css={container}>
      <h2 css={title}>Blocks</h2>
      <BlocksOverview />
    </div>
  );
};
