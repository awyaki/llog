import { VFC } from 'react';

import { BlocksForDetailView } from './components/BlocksForDetailView';
import { container } from './style/container';

import { Block } from '~/stub/types';

type Props = {
  blocks: Block[];
};

export const SubContainer: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, level, unitNumber }) => <li key={id}>
                                                    <BlocksForDetailView 
                                                      level={level} 
                                                      unitNumber={unitNumber} />
                                                  </li>)}
    </ul>
  );
};
