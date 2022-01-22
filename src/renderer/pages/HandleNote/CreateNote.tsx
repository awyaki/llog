import { VFC } from 'react';

import { useEditNote } from './hooks';

import { ModalToSelectTags, ModalToCreateTag } from '~/components';

import { pageTitle } from '~/pages/style';

import { confirmer } from './functions';



import { Box, HStack } from '@chakra-ui/react';

import { 
  Header, 
  InfoButton, 
  ShowNoteButton, 
  Note, 
  ModalToSelectBlocks,
  ControlBox
} from './components';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {
  const { content, 
          note, 
          mode, 
          markdown,
          setMarkdown,
          isNoteChange,
          isOpenSelectBlocks,
          onOpenSelectBlocks,
          onCloseSelectBlocks,
          onCreateNote,
          onUpdateNote,
          onCommitLog,
          isNoteExist,
          onMoveToOtherNoteEdit,
          setToEdit,
          setToPreview,
          handleLink,
        } = useEditNote();
  
  return (
    <>
      <Header isNoteChange={isNoteChange} confirmer={confirmer} />
      <ModalToSelectTags />
      <ModalToCreateTag />
      <Box __css={container}>
        <h2 css={{ ...pageTitle, marginBottom: '8px' }}>{content?.name}</h2>
        <HStack width="120px" mb="16px">
          <InfoButton onClick={handleLink(`/content/${content?.id}`, isNoteChange)} />
          <ShowNoteButton onClick={handleLink(`/content/${content?.id}/notes`, isNoteChange)} />
        </HStack>
        <HStack>
          <Note 
            mode={mode}
            markdown={markdown}
            setMarkdown={setMarkdown}
            updatedAt={note?.updatedAt}
            isNoteChange={isNoteChange}
            minWidth="300px" 
            maxWidth="800px" 
            w="70%" 
            pr="6%" />
          <ControlBox 
            mode={mode}
            setToEdit={setToEdit}
            setToPreview={setToPreview}
            onOpenSelectBlocks={onOpenSelectBlocks}
            isNoteChange={isNoteChange}
            isNoteExist={isNoteExist}
            onUpdateNote={onUpdateNote}
            onCreateNote={onCreateNote}
            onCommitLog={onCommitLog}
            onMoveToOtherNoteEdit={onMoveToOtherNoteEdit} />

        </HStack>
      </Box>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content?.blocks ?? []} />
    </>
  );
};
