import { VFC } from 'react';

import { container } from './style/container';
import { SubContainer } from './components/SubContainer';

import { Block } from '~/stub/types';
import { divideArray } from '~/utils/divideArray';

type Props = {
  blocks: Block[];
};

export const BlocksContainer: VFC<Props> = ({ blocks }) => {
  const divBlocks = divideArray(blocks, 25);

  return (
    <ul css={container}>
      {divBlocks.map((blocks) => <li key={blocks[0].id}><SubContainer blocks={blocks} /></li>)}
    </ul>
  );
};
