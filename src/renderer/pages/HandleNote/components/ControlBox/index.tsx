import { VFC } from 'react';

import { Mode } from '../../types';

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

type Props = {
  mode: Mode;
  setToEdit: () => void;
  setToPreview: () => void;
  onOpenSelectBlocks: () => void;
  onOpenSelectTags: () => void;
};

export const ControlBox: VFC<Props> = ({ 
  mode, 
  setToEdit, 
  setToPreview, 
  onOpenSelectBlocks,
  onOpenSelectTags
  }) => {
  return (
    <Box pos="fixed" top="220px" left="65%">
      <VStack alignItems="flex-start">
          <Box pb="12px">
            <h2 css={title}>Selected Tags</h2>
            <SelectedTags onOpenSelectTags={onOpenSelectTags} tags={[]} />
          </Box>
          <Box pb="12px">
            <h2 css={title}>Selected Blocks</h2>
            <SelectedBlocks onOpenSelectBlocks={onOpenSelectBlocks} />
          </Box>
        <HStack w="120px" pb="25px">
          <TakeANoteButton mode={mode} onClick={setToEdit} />
          <PreviewButton mode={mode} onClick={setToPreview}/>
        </HStack>
        <CommitButton />
        <SaveButton />
        <OneMoreNoteButton />
      </VStack>
    </Box>
  );
};
