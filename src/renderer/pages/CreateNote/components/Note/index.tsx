import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { SaveButton } from './components/SaveButton';
import { CommitButton } from './components/CommitButton';
import { OneMoreNoteButton } from './components/OneMoreNoteButton';
import { TakeANoteButton } from './components/TakeANoteButton';
import { PreviewButton } from './components/PreviewButton';

export const Note: VFC = () => {
  return (
    <Box>
      <SaveButton />
      <CommitButton />
      <OneMoreNoteButton />
      <TakeANoteButton isActive={false} />
      <PreviewButton isActive={true} />
    </Box>
  );
};
