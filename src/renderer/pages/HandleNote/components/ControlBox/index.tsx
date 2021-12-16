import { VFC } from 'react';

import { Box, VStack, HStack } from '@chakra-ui/react';

import { 
  SaveButton,
  CommitButton,
  OneMoreNoteButton,
  TakeANoteButton,
  PreviewButton,
  SelectedTags,
  SelectedBlocks,
  } from './components';

import { title } from './style';

export const ControlBox: VFC = () => {
  return (
    <Box pos="fixed" top="220px" left="65%">
      <VStack alignItems="flex-start">
          <Box pb="12px">
            <h2 css={title}>Selected Tags</h2>
            <SelectedTags tags={[]} />
          </Box>
          <Box pb="12px">
            <h2 css={title}>Selected Blocks</h2>
            <SelectedBlocks />
          </Box>
        <HStack w="120px" pb="25px">
          <TakeANoteButton isActive={true} />
          <PreviewButton isActive={false} />
        </HStack>
        <CommitButton />
        <SaveButton />
        <OneMoreNoteButton />
      </VStack>
    </Box>
  );
};
