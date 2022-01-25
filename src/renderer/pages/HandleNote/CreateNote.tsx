import { VFC } from 'react';

import { useEditNote } from './hooks';

import { 
  ModalToSelectTags, 
  ModalToCreateTag,
} from '~/components';

import { pageTitle } from '~/pages/style';

import { confirmer } from './functions';



import { Box, HStack } from '@chakra-ui/react';

import { 
  ShowNoteButton, 
  Note, 
  ModalToSelectBlocks,
  ControlBox,
  SwitchingMenu,
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
  
  if (content === null) return <></>;

  return (
    <div css={{ display: 'flex' }}>
      <ModalToSelectTags />
      <ModalToCreateTag />
      <SwitchingMenu 
        isNoteChange={isNoteChange} 
        confirmer={confirmer} />
      <Box __css={container}>
        <h2 css={{ ...pageTitle, marginBottom: '8px' }}>{content.name}</h2>
        <HStack width="120px" mb="16px">
          <ShowNoteButton onClick={handleLink(`/content/${content.id}/notes`, isNoteChange)} />
        </HStack>
        <div css={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Note 
            css={{ width: 'calc(100% - 200px)', maxWidth: '830px', marginRight: '32px' }}
            mode={mode}
            markdown={markdown}
            setMarkdown={setMarkdown}
            updatedAt={note?.updatedAt}
            isNoteChange={isNoteChange} />
          <ControlBox 
            css={{ width: '200px', position: 'sticky', top: '244px' }}
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

        </div>
      </Box>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content.blocks} />
    </div>
  );
};
