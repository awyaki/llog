import { VFC } from 'react';

import { BlocksForOverview } from './components/BlocksForOverveiw';
import { container } from './style/container';

import { Block } from '~/stub/types';

type Props = {
  blocks: Block[];
};

export const SubContainer: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, level }) => <li key={id}><BlocksForOverview level={level} /></li>)}
    </ul>
  );
};
