import { VFC } from 'react';
import { Box } from '@chakra-ui/react';

import { Block as Block } from '@prisma/client';

import { BlocksForDetailView } from './components/BlocksForDetailView';

import { container } from './style/container';
import { title } from './style/title';

type Props = {
  blocks: Block[];
};

export const BlocksDetailView: VFC<Props> = ({ blocks }) => {
  return (
    <Box>
      <h2 css={title}>Detail view</h2>
      <ul css={container}>
        {blocks.map(({ id, unitNumber, level }) => <li key={id}><BlocksForDetailView unitNumber={unitNumber} level={level} /></li>)}
      </ul>
    </Box>
  );
};
