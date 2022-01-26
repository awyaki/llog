import { VFC } from 'react';

import { 
  Content,
  NotesOfContent,
  CreateNote,
  PreviewNote
  } from '~/pages';

import { 
  Switch, 
  Route,
  useRouteMatch,
  } from 'react-router-dom';

import { useContentHub } from './hooks';

export const ContentHub: VFC = () => {
  const { path } = useRouteMatch();
  console.log(`ContentHub path`, path);
  useContentHub();
  return (
    <Switch>
      <Route path={`${path}/notes`}>
        <NotesOfContent />
      </Route>
      <Route path={`${path}/createnote`}>
            <CreateNote />
      </Route>
      <Route path={`${path}/updatenote/:noteId`}>
            <CreateNote />
      </Route>
      <Route path={`${path}/previewnote/:noteId`}>
          <PreviewNote />
      </Route>
      <Route path={`${path}`}>
            <Content />
      </Route>
    </Switch>
  );
};
