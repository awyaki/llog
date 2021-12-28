import { VFC } from 'react';

import { Tag, Block } from '@prisma/client';
import { container } from './style';

import { Box } from '@chakra-ui/react';

type Props = {
  contentName: string;
  tags: Pick<Tag, 'id' | 'name'>[];
  blocks: Pick<Block, 'id' | 'level' | 'unitNumber'>[];
  updatedAt: string;
};

export const NoteWithContentName: VFC<Props> = ({ contentName, tags, blocks, updatedAt }) => {
  return (
    <Box css={container}>
      
    </Box>
  );
};
