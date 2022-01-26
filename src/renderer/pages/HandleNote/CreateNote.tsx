import { VFC } from 'react';

import { useEditNote } from './hooks';

import { 
  ModalToSelectTags, 
  ModalToCreateTag,
} from '~/components';

import { pageTitle } from '~/pages/style';

import { 
  Note, 
  ModalToSelectBlocks,
  ControlBox,
} from './components';

import { ContentWithRelation } from '~/pages/type';

type Props = {
  content: ContentWithRelation;
};


export const CreateNote: VFC<Props> = ({ content }) => {
  const { 
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
        } = useEditNote(content);
  

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
