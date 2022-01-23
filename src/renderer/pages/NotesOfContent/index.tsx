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
  
  if (content === null) return <></>;
  return (
        <>
          <Header />
          <Box css={container}>
            <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
            <ul css={{ ...buttons, marginBottom: '8px' }}>
              <li><InfoButton id={content.id}/></li>
              <li><CreateNoteButton id={content.id} /></li>
            </ul>
            <TagList tags={content.tags} />
            <NoteList notes={notes} />
          </Box>
        </>
  );
};
