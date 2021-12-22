import { VFC } from 'react';

import { Tag } from '@prisma/client';

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
  CreateNewTag
  } from './components';

import { title } from './style';

type Props = {
  mode: Mode;
  defaultTags: Tag[];
  setToEdit: () => void;
  setToPreview: () => void;
  onOpenSelectBlocks: () => void;
  onOpenSelectTags: () => void;
  onOpenCreateNewTag: () => void;
  onCreateNote: () => void;
};

export const ControlBox: VFC<Props> = ({ 
  mode, 
  defaultTags,
  setToEdit, 
  setToPreview, 
  onOpenSelectBlocks,
  onOpenSelectTags,
  onOpenCreateNewTag,
  onCreateNote
  }) => {
  return (
    <Box pos="fixed" top="220px" left="65%">
      <VStack alignItems="flex-start">
          <Box pb="12px">
            <h2 css={title}>Tags</h2>
            <CreateNewTag onOpen={onOpenCreateNewTag}/>
            <SelectedTags defaultTags={defaultTags} onOpenSelectTags={onOpenSelectTags} />
          </Box>
          <Box pb="12px">
            <h2 css={title}>Blocks</h2>
            <SelectedBlocks onOpenSelectBlocks={onOpenSelectBlocks} />
          </Box>
        <HStack w="120px" pb="25px">
          <TakeANoteButton mode={mode} onClick={setToEdit} />
          <PreviewButton mode={mode} onClick={setToPreview}/>
        </HStack>
        <CommitButton />
        <SaveButton onClick={onCreateNote}/> {/* TODO: when a note have already been existed, onClick should be passed `onUpdateNote` handler */}
        <OneMoreNoteButton />
      </VStack>
    </Box>
  );
};
