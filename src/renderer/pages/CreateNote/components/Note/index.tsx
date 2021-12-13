import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { SaveButton } from './components/SaveButton';
import { CommitButton } from './components/CommitButton';
import { OneMoreNoteButton } from './components/OneMoreNoteButton';

export const Note: VFC = () => {
  return (
    <Box>
      <SaveButton />
      <CommitButton />
      <OneMoreNoteButton />
    </Box>
  );
};
