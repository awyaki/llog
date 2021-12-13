import { VFC } from 'react';

import { Tag } from '@prisma/client';

import { Box } from '@chakra-ui/react';

import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { SelectTags } from './components/SelectTags';

import { container } from '~/pages/style/container';

export const CreateNote: VFC = () => {

  const tagsStub: Tag[] = [{ id: 1, name: 'compiler', noteId: null, contentId: null }, { id: 2, name: 'computer science', noteId: null, contentId: null }];
  return (
    <Box css={container}>
      <InfoButton />
      <ShowNoteButton />
      <SelectTags tags={tagsStub}/>
    </Box>
  );
};
