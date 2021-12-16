import { VFC } from 'react';

import { Block } from '@prisma/client';

import { BlocksForOverview } from './components/BlocksForOverveiw';

import { container } from './style/container';
import { title } from './style/title';

type Props = {
  blocks: Block[];
};

export const BlocksOverview: VFC<Props> = ({ blocks }) => {
  return (
    <div>
      <h2 css={title}>Overview</h2>
      <ul css={container}>
        {blocks.map(({ id, level }) => <li key={id}><BlocksForOverview level={level} /></li>)}
      </ul>
    </div>
  );
};
