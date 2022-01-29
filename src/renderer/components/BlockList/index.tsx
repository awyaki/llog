import { VFC } from 'react';

import { makeContainer } from '~/pages/style';

import { Block } from '@prisma/client';

type Props = {
  blocks: Block[];
};

export const BlockList: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={{
      display: 'flex',
      flexWrap: 'wrap',
      '> li': {
        marginRight: '4px',
        marginBottom: '4px',
      }
    }}>
      {blocks.map(({ id, level, unitNumber }) => <li key={id} css={makeContainer(level)}>{unitNumber}</li>)}
    </ul>
  );
};
