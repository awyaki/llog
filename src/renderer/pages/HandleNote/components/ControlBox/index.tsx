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
  CreateNewTag
  } from './components';

import { title } from './style';

type Props = {
  mode: Mode;
  setToEdit: () => void;
  setToPreview: () => void;
  onOpenSelectBlocks: () => void;
  onOpenSelectTags: () => void;
  onOpenCreateNewTag: () => void;
  isNoteChange: boolean;
  isNoteExist: boolean;
  onCreateNote: () => void;
  onUpdateNote: () => void;
};

export const ControlBox: VFC<Props> = ({ 
  mode, 
  setToEdit, 
  setToPreview, 
  onOpenSelectBlocks,
  onOpenSelectTags,
  onOpenCreateNewTag,
  isNoteChange,
  isNoteExist,
  onCreateNote,
  onUpdateNote
  }) => {
  return (
    <Box pos="fixed" top="220px" left="65%">
      <VStack alignItems="flex-start">
          <Box pb="12px">
            <h2 css={title}>Tags</h2>
            <CreateNewTag onOpen={onOpenCreateNewTag}/>
            <SelectedTags onOpenSelectTags={onOpenSelectTags} />
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
        <SaveButton 
          onClick={isNoteExist ? onUpdateNote : onCreateNote} 
          disabled={!isNoteChange} />
        <OneMoreNoteButton />
      </VStack>
    </Box>
  );
};
