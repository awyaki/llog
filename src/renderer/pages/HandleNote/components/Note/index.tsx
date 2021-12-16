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
import { ShowSaveDate } from './components/ShowSaveDate';

type Props = {
  tags: Tag[];
};

export const Note: VFC<Props> = ({ tags }) => {
  const [markdown, setMarkdown] = useState(''); 
  const [mode, setMode] = useState<'edit' | 'preview'>('edit'); 

  const handleTakeANoteButtonClick = () => {
    setMode('edit');
  };

  const handlePreviewButtonClick = () => {
    setMode('preview');
  };

  return (
    <Box>
      <SelectedTags tags={tags} mb="10px" />
      <SelectedBlocks mb="10px" />
      <HStack justifyContent="space-between" mb="16px">
        <HStack>
          <SaveButton />
          <CommitButton />
          <OneMoreNoteButton />
        </HStack>
        <ShowSaveDate notSaved={true} date={new Date()}/>
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
