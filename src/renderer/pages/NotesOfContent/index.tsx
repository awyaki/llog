import { VFC } from 'react';

import { useNotesOfContent } from './hooks';

import { Box } from '@chakra-ui/react';

import { 
  Menu,
  ContentMenu
} from '~/components';

import { NotFoundPage } from '~/pages';

import { container } from './style/container'
import { title } from './style/title';

import { 
  TagList,
  NoteList,
  } from './components';



export const NotesOfContent: VFC = () => {
  const { content, notes } = useNotesOfContent();
  
  if (content === null) return <NotFoundPage />;
  return (
        <div css={{ display: 'flex' }}>
          <Menu />
          <ContentMenu contentId={content.id} />
          <Box css={container}>
            <h1 css={{ ...title, marginBottom: '8px' }}>{content.name}</h1>
            <TagList tags={content.tags} />
            <NoteList notes={notes} />
          </Box>
        </div>
  );
};
