import { VFC } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { useUpdateBlockLevel } from './hooks';

import {
  Contents,
  Content,
  NotesOfContent,
  CreateNote,
  Logs,
  PreviewNote
} from './pages';

import { Notifier, SelectedTagsContextProvider } from './components';

import { Box } from '@chakra-ui/react';

import { container } from './style';

export const App: VFC = () => {
  useUpdateBlockLevel();

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
          <Route path="/content/:contentId/previewnote/:noteId">
              <PreviewNote />
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
