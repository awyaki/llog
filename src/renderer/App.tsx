import { VFC } from 'react';
import { Header } from './components/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Contents } from './pages/Contents';

import { Content } from './pages/Content';

import { NotesOfContent } from './pages/NotesOfContent';

import { CreateNote } from './pages/HandleNote';

import { NoteWithContentName } from './components/NoteWithContentName';

import { Box } from '@chakra-ui/react';

export const App: VFC = () => {
  return (
    <HashRouter>
      <Box>
        <Switch>
          <Route path="/">
            <NoteWithContentName 
              contentName="コンパイラ原理と構造"
              tags={[{ id: 1, name: 'computer', }]}
              blocks={[{ id: 1, unitNumber: 1, level: 1 }, { id: 2, unitNumber: 2, level: 2 }, { id: 3, unitNumber: 3, level: 3 }]}
              updatedAt="2021/7/30"
            />
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
