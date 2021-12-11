import { VFC } from 'react';
import { Header } from './components/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Contents } from './pages/Contents';
import { Content } from './pages/Content';

import { NotesOfContent } from './pages/NotesOfContent';

import { CreateNote } from './pages/CreateNote';

import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <HashRouter>
      <Box>
        <Header />
        <Switch>
          <Route path="/">
            <CreateNote />
          </Route>
          <Route path="/content/:contentId/notes">
            <NotesOfContent />
          </Route>
          <Route path="/content/:contentId">
            <Content />
          </Route>
          <Route path="/">
            <Contents />
          </Route>
        </Switch>
      </Box>
    </HashRouter>
  );
};
