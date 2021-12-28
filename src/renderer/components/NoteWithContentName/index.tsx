import { VFC } from 'react';

import { Tag, Block } from '@prisma/client';
import { 
  container, 
  title,
  date
  } from './style';

import { Box, HStack } from '@chakra-ui/react';

import { ControlButtons } from './components';

type Props = {
  contentName: string;
  tags: Pick<Tag, 'id' | 'name'>[];
  blocks: Pick<Block, 'id' | 'level' | 'unitNumber'>[];
  updatedAt: string;
};

export const NoteWithContentName: VFC<Props> = ({ contentName, tags, blocks, updatedAt }) => {
  return (
    <Box css={container}>
    <HStack justifyContent="space-between" justifyItems="flex-start">
      <div css={date}>{updatedAt}</div>
      <ControlButtons
        onClickCancel={() => {}}
        onClickCommit={() => {}}
        onClickEditNote={() => {}}
        onClickShowNote={() => {}} />
    </HStack>
      <h2 css={title}>{contentName}</h2>
    </Box>
  );
};
