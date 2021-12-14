import { VFC, useState } from 'react';

import { Tag } from '@prisma/client';
import { Block } from '@prisma/client';


import { Box, HStack } from '@chakra-ui/react';

import { SaveButton } from './components/SaveButton';
import { CommitButton } from './components/CommitButton';
import { OneMoreNoteButton } from './components/OneMoreNoteButton';
import { TakeANoteButton } from './components/TakeANoteButton';
import { PreviewButton } from './components/PreviewButton';
import { MarkdownEditor } from './components/MarkdownEditor';
import { SelectedTags } from './components/SelectedTags';
import { SelectedBlocks } from './components/SelectedBlocks';
import { MarkdownPreview } from './components/MarkdownPreview';

export const Note: VFC = () => {
  const [markdown, setMarkdown] = useState(''); 
  const [mode, setMode] = useState<'edit' | 'preview'>('edit'); 

  const tagsStub: Tag[] = [{ id: 1, name: 'compiler', noteId: null, contentId: null }, { id: 2, name: 'computer science', noteId: null, contentId: null }];
  const blocksStub: Block[] = [
    { id: 1, unitNumber: 1, contentId: 1, level: 0, createdAt: new Date(), commitedAt: new Date() },
    { id: 2, unitNumber: 2, contentId: 1, level: 1, createdAt: new Date(), commitedAt: new Date() },
    { id: 3, unitNumber: 3, contentId: 1, level: 2, createdAt: new Date(), commitedAt: new Date() },
    { id: 4, unitNumber: 4, contentId: 1, level: 3, createdAt: new Date(), commitedAt: new Date() },
    { id: 5, unitNumber: 5, contentId: 1, level: 4, createdAt: new Date(), commitedAt: new Date() },
    { id: 6, unitNumber: 6, contentId: 1, level: 5, createdAt: new Date(), commitedAt: new Date() },
  ];

  const handleTakeANoteButtonClick = () => {
    setMode('edit');
  };

  const handlePreviewButtonClick = () => {
    setMode('preview');
  };

  return (
    <Box>
      <SelectedTags tags={tagsStub} mb="10px" />
      <SelectedBlocks blocks={blocksStub} mb="10px" />
      <HStack justifyContent="space-between" mb="16px">
        <HStack>
          <SaveButton />
          <CommitButton />
          <OneMoreNoteButton />
        </HStack>
        <HStack>
          <TakeANoteButton 
            isActive={mode === 'edit'} 
            onClick={handleTakeANoteButtonClick} />
          <PreviewButton 
            isActive={mode === 'preview'}
            onClick={handlePreviewButtonClick} />
        </HStack>
      </HStack>
      {mode === 'edit' 
          ? <MarkdownEditor 
              markdown={markdown}
              setMarkdown={setMarkdown} />
          : <MarkdownPreview 
              markdown={markdown}
            />}
    </Box>
  );
};
