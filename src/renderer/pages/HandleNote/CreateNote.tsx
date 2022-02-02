import { VFC } from 'react';

import { useEditNote } from './hooks';

import { 
  CollapseToSelectTags
} from '~/components';

import { pageTitle } from '~/pages/style';

import { 
  Note, 
  ControlBox,
} from './components';

import { ContentWithRelation } from '~/pages/type';

import { CollapseToSelectBlocks } from './components';

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
          onOpenSelectBlocks,
          onCreateNote,
          onUpdateNote,
          onCommitLog,
          isNoteExist,
          onMoveToOtherNoteEdit,
          toggleEditBetweenPreview
        } = useEditNote(content);
  

  return (
    <>
      <h2 css={{ ...pageTitle, marginBottom: '16px' }}>{content.name}</h2>
      <CollapseToSelectTags searchQuery="" />
      <CollapseToSelectBlocks blocks={content.blocks} />
      <div css={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Note 
          css={{ width: 'calc(100% - 200px)', maxWidth: '830px', marginRight: '32px' }}
          mode={mode}
          markdown={markdown}
          setMarkdown={setMarkdown} />
        <ControlBox 
          css={{ width: '200px', position: 'sticky', top: '104px' }}
          updatedAt={note?.updatedAt}
          mode={mode}
          toggleEditBeteewnPreview={toggleEditBetweenPreview}
          onOpenSelectBlocks={onOpenSelectBlocks}
          isNoteChange={isNoteChange}
          isNoteExist={isNoteExist}
          onUpdateNote={onUpdateNote}
          onCreateNote={onCreateNote}
          onCommitLog={onCommitLog}
          onMoveToOtherNoteEdit={onMoveToOtherNoteEdit} />
      </div>
    </>
  );
};
