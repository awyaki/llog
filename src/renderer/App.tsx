import { VFC } from 'react';
import { Header } from './components/Header';
import { NotesOfContent } from './pages/NotesOfContent';
import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <Box>
      <Header />
      <NotesOfContent />
    </Box>
  );
};
