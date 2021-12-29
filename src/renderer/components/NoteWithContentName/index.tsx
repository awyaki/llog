import { VFC } from 'react';

import { Tag, Block } from '@prisma/client';
import { 
  container, 
  title,
  date
  } from './style';

import { Box, HStack } from '@chakra-ui/react';

import { 
  ControlButtons,
  ShowBlocks,
  ShowTags,
  } from './components';

import 'zenn-content-css';

type Props = {
  contentName: string;
  tags: Pick<Tag, 'id' | 'name'>[];
  blocks: Pick<Block, 'id' | 'level' | 'unitNumber'>[];
  updatedAt: string;
  html: string;
  onClickDelete?: () => void;
  onClickCommit?: () => void;
  onClickEditNote?: () => void;
  onClickShowNote?: () => void;
};

export const NoteWithContentName: VFC<Props> = ({ 
  contentName,
  tags, 
  blocks, 
  html, 
  updatedAt,
  onClickDelete,
  onClickCommit,
  onClickEditNote,
  onClickShowNote,
}) => {
  return (
    <Box css={container}>
    <HStack justifyContent="space-between" justifyItems="flex-start">
      <div css={date}>{updatedAt}</div>
      <ControlButtons
        onClickDelete={onClickDelete}
        onClickCommit={onClickCommit}
        onClickEditNote={onClickEditNote}
        onClickShowNote={onClickShowNote} />
    </HStack>
      <HStack>
        <Box w="100%" pr="16px">
          <h2 css={title}>{contentName}</h2>
          <ShowTags tags={tags} />
          <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
        </Box>
        <ShowBlocks blocks={blocks} />
      </HStack>
    </Box>
  );
};
