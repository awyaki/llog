import { VFC } from 'react';

import { useNotesOfContent } from './hooks';

import { title } from './style/title';

import { ContentWithRelation } from '~/pages/type';

import { 
  TagList,
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
      <TagList tags={content.tags} />
      <NoteList notes={notes} />
    </>
  );
};
