import { VFC } from 'react';


import { useNotesOfContent } from './hooks';

import { Box } from '@chakra-ui/react';

import { Menu, EditNoteButton } from '~/components';

import { container } from './style/container'
import { title } from './style/title';
import { buttons } from './style/buttons';

import { 
  TagList,
  NoteList,
  } from './components';



export const NotesOfContent: VFC = () => {
  const { content, notes } = useNotesOfContent();
  
  if (content === null) return <></>;
  return (
        <div css={{ display: 'flex' }}>
          <Menu />
          <Box css={container}>
            <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
            <ul css={{ ...buttons, marginBottom: '8px' }}>
              <li><EditNoteButton secondary /></li>
            </ul>
            <TagList tags={content.tags} />
            <NoteList notes={notes} />
          </Box>
        </div>
  );
};
