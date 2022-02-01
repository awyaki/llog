import { 
  VFC
  } from 'react';

import { Block as TBlock } from '@prisma/client';

import { Block } from './components';

type Props = {
  blocks: TBlock[];
};

export const SelectBlocksList: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      '> li': {
        marginLeft: '3px',
        marginBottom: '3px',
      }
    }}>
      {blocks.map((block) => <li key={block.id}><Block block={block} /></li>)}
    </ul>
  );
};
