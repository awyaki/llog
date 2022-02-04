import { 
  VFC,
  useState,
  ChangeEventHandler,
  } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { useEditNote } from './hooks';

import { 
  CollapseToSelectTags,
  ModalToSubmitLog
} from '~/components';

import { pageTitle } from '~/pages/style';

import { 
  Note, 
  ControlBox,
  CollapseToSelectBlocks
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
          selectedTags,
          toggleSelectedTagsForHandleNote,
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

  const { 
    isOpen: isOpenModalToSubmitLog,
    onClose: onCloseModalToSubmitLog,
    onOpen: onOpenModalToSubmitLog
    } = useDisclosure();
  
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <ModalToSubmitLog 
        onSubmitLog={onCommitLog}
        isOpen={isOpenModalToSubmitLog} 
        onClose={onCloseModalToSubmitLog}/>
      <h2 css={{ ...pageTitle, marginBottom: '16px' }}>{content.name}</h2>
      <CollapseToSelectTags 
        selectedTags={selectedTags}
        onToggleSelectedTags={toggleSelectedTagsForHandleNote}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery} 
        onChangeSearchQuery={onChangeSearchQuery} />
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
          onOpenModalToSubmitLog={onOpenModalToSubmitLog}
          onMoveToOtherNoteEdit={onMoveToOtherNoteEdit} />
      </div>
    </>
  );
};
