import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { Note } from './components/Note';

import { container } from '~/pages/style/container';

export const CreateNote: VFC = () => {

  return (
    <Box css={container}>
      <InfoButton />
      <ShowNoteButton />
      <Note />
    </Box>
  );
};
