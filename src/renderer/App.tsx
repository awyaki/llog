import { VFC } from 'react';
import { Header } from './components/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Contents } from './pages/Contents';
import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <HashRouter>
      <Box>
        <Header />
        <Switch>
          <Route path="/">
            <Contents />
          </Route>
        </Switch>
      </Box>
    </HashRouter>
  );
};
