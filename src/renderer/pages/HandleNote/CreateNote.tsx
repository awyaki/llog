import { VFC } from 'react';

import { useEditNote } from './hooks';

import { 
  ModalToSelectTags, 
  ModalToCreateTag,
} from '~/components';

import { pageTitle } from '~/pages/style';

import { confirmer } from './functions';


import { Box } from '@chakra-ui/react';

import { 
  Note, 
  ModalToSelectBlocks,
  ControlBox,
  SwitchingMenu,
  SwitchingContentMenu,
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
        } = useEditNote();
  
  if (content === null) return <></>;

  return (
    <>
      <ModalToSelectTags />
      <ModalToCreateTag />
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content.blocks} />
      <>
        <h2 css={{ ...pageTitle, marginBottom: '8px' }}>{content.name}</h2>
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
      </>
    </>
  );
};
