import { VFC } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Contents } from './pages/Contents';

import { Content } from './pages/Content';

import { NotesOfContent } from './pages/NotesOfContent';

import { CreateNote } from './pages/HandleNote';

import { Logs } from './pages/Logs';

import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <HashRouter>
      <Box>
        <Switch>
          <Route path="/">
            <Logs />
          </Route>
          <Route path="/content/:contentId/notes">
            <NotesOfContent />
          </Route>
          <Route path="/content/:contentId/createnote">
            <CreateNote />
          </Route>
          <Route path="/content/:contentId/updatenote/:noteId">
            <CreateNote />
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
