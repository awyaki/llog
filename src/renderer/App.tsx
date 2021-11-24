import { VFC } from 'react';
import { Header } from './components/Header';
import { Contents } from './pages/Contents';
import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <Box>
      <Header />
      <Contents />
    </Box>
  );
};
