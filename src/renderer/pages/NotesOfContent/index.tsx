import { VFC, useState } from 'react';

import { useNotesOfContent } from './hooks';

import { title } from './style/title';

import { ContentWithRelation } from '~/pages/type';

import { SearchNotes } from './components';

import { TagsList, AccordionButtonWithText } from '~/components';


import { 
  NoteList,
  } from './components';

type Props = {
  content: ContentWithRelation;
};

export const NotesOfContent: VFC<Props> = ({ content }) => {
  const { 
    notes,
    filteredNotes,
    setFilteredNotes
    } = useNotesOfContent(content.id);
   
  const [isOpenSearchNotes, setIsOpenSearchNotes] = useState(false);
  
  return (
    <>
      <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
      <TagsList 
        css={{ marginBottom: '16px' }}
        tags={content.tags} />
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
            setFilteredNotes={setFilteredNotes}
          /> : undefined}
      <NoteList notes={filteredNotes} />
    </>
  );
};
