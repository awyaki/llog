import { VFC, useState } from 'react';

import { useNotesOfContent } from './hooks';

import { title } from './style/title';

import { ContentWithRelation } from '~/pages/type';

import { SearchNotes } from './components';

import { TagsList, AccordionButtonWithText } from '~/components';

import {} from './hooks';

import { 
  NoteList,
  } from './components';

type Props = {
  content: ContentWithRelation;
};

export const NotesOfContent: VFC<Props> = ({ content }) => {
  const { notes } = useNotesOfContent(content.id);
  
  const [isOpenSearchNotes, setIsOpenSearchNotes] = useState(false);
  
  return (
    <>
      <h1 css={{ ...title, marginBottom: '16px' }}>{content.name}</h1>
      <AccordionButtonWithText 
        css={{ marginBottom: '32px' }}
        text="Search"
        isOpen={isOpenSearchNotes}
        onClick={() => setIsOpenSearchNotes((p) => !p)}
      />
      {notes !== null
        ? <SearchNotes 
            isOpen={isOpenSearchNotes}
            notes={notes}
          /> : undefined}
      <TagsList 
        css={{ marginBottom: '16px' }}
        tags={content.tags} />
      <NoteList notes={notes} />
    </>
  );
};
