import { VFC } from 'react';

import { useNotesOfContent } from './hooks';

import { NotFoundPage } from '~/pages';

import { title } from './style/title';

import { 
  TagList,
  NoteList,
  } from './components';



export const NotesOfContent: VFC = () => {
  const { content, notes } = useNotesOfContent();
  
  if (content === null) return <NotFoundPage />;
  return (
    <>
      <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
      <TagList tags={content.tags} />
      <NoteList notes={notes} />
    </>
  );
};
