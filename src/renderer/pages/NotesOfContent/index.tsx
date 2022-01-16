import { VFC } from 'react';


import { useNotesOfContent } from './hooks';

import { Box } from '@chakra-ui/react';

import { Header } from '../Header';

import { container } from './style/container'
import { title } from './style/title';
import { buttons } from './style/buttons';

import { 
  TagList,
  InfoButton,
  CreateNoteButton,
  NoteList,
  } from './components';


export const NotesOfContent: VFC = () => {
  const { content, notes } = useNotesOfContent();

  return (
        <>
          <Header />
          <Box css={container}>
            <h1 css={title}>{content?.name ?? ''}</h1>
            <TagList tags={content?.tags ?? []} />
            <ul css={buttons}>
              <li><InfoButton id={content?.id}/></li>
              <li><CreateNoteButton id={content?.id} /></li>
            </ul>
            <NoteList notes={notes} />
          </Box>
        </>
  );
};
