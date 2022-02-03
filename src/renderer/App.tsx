import { VFC } from 'react';

import { 
  Route,
  Switch,
  useLocation
  } from 'react-router-dom';

import { useUpdateBlockLevel } from './hooks';

import {
  Contents,
  Logs,
  ContentHub,
} from './pages';

import { 
  Notifier,
  SelectedTagsContextProvider,
  ContentContextProvider,
  SelectTagsContextProvider,
  Menu,
  LogContextProvider,
} from './components';

import { Box } from '@chakra-ui/react';

import { container } from './style';

import { AnimatePresence } from 'framer-motion';

export const App: VFC = () => {
  useUpdateBlockLevel();
  const location = useLocation();
  return (
    <Box css={container}>
      <Notifier />
      <Menu />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/content/:contentId">
          <ContentContextProvider>
            <SelectedTagsContextProvider>
                <SelectTagsContextProvider>
                  <ContentHub />
                </SelectTagsContextProvider>
            </SelectedTagsContextProvider>
          </ContentContextProvider>
        </Route>
        <Route path="/logs">
          <LogContextProvider>
            <Logs />
          </LogContextProvider>
        </Route>
        <Route path="/">
          <SelectedTagsContextProvider>
            <SelectTagsContextProvider>
              <Contents />
            </SelectTagsContextProvider>
          </SelectedTagsContextProvider>
        </Route>
      </Switch>
      </AnimatePresence>
    </Box>
  );
};
