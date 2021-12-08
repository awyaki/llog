import { VFC } from 'react';

import { Block } from '@prisma/client';

import { BlocksContainer } from './components/BlocksContainer';
import { title } from './style/title';

type Props = {
  blocks: Block[];
};

export const BlocksOverview: VFC<Props> = ({ blocks }) => {
  return (
    <div>
      <h2 css={title}>Overview</h2>
      <BlocksContainer blocks={blocks} />
    </div>
  );
};
