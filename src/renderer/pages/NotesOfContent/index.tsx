import { VFC } from 'react';

import { useNotesOfContent } from './hooks';

import { title } from './style/title';

import { ContentWithRelation } from '~/pages/type';

import { SearchNotes } from './components';

import { TagsList } from '~/components';

import { 
  NoteList,
  } from './components';

type Props = {
  content: ContentWithRelation;
};

export const NotesOfContent: VFC<Props> = ({ content }) => {
  const { notes } = useNotesOfContent(content.id);
  
  return (
    <>
      <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
      <TagsList 
        css={{ marginBottom: '16px' }}
        tags={content.tags} />
      <NoteList notes={notes} />
    </>
  );
};
