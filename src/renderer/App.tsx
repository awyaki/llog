import { VFC } from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { useUpdateBlockLevel } from './hooks';

import {
  Contents,
  Logs,
  ContentHub,
} from './pages';

import { 
  Notifier,
  SelectedTagsContextProvider,
  ContentContextProvider
} from './components';

import { Box } from '@chakra-ui/react';

import { container } from './style';

export const App: VFC = () => {
  useUpdateBlockLevel();

  return (
    <HashRouter>
      <Box css={container}>
        <Notifier />
        <Switch>
          <Route path="/content/:contentId">
            <ContentContextProvider>
              <SelectedTagsContextProvider>
                <ContentHub />
              </SelectedTagsContextProvider>
            </ContentContextProvider>
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
