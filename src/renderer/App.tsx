import { VFC } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Contents } from './pages/Contents';

import { Content } from './pages/Content';

import { NotesOfContent } from './pages/NotesOfContent';

import { CreateNote } from './pages/HandleNote';

import { Logs } from './pages/Logs';

import { Notifier, SelectedTagsContextProvider } from './components';

import { Box } from '@chakra-ui/react';

import { container } from './style';

export const App: VFC = () => {
  return (
    <HashRouter>
      <Box css={container}>
        <Notifier />
        <Switch>
          <Route path="/content/:contentId/notes">
            <NotesOfContent />
          </Route>
          <Route path="/content/:contentId/createnote">
            <SelectedTagsContextProvider>
              <CreateNote />
            </SelectedTagsContextProvider>
          </Route>
          <Route path="/content/:contentId/updatenote/:noteId">
            <SelectedTagsContextProvider>
              <CreateNote />
            </SelectedTagsContextProvider>
          </Route>
          <Route path="/content/:contentId">
            <Content />
          </Route>
          <Route path="/logs">
            <Logs />
          </Route>
          <Route path="/">
            <SelectedTagsContextProvider>
              <Contents />
            </SelectedTagsContextProvider>
          </Route>
        </Switch>
      </Box>
    </HashRouter>
  );
};
