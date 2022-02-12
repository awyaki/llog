import { VFC } from 'react';

import { 
  ContentMenu,
  PageMotion,
  } from '~/components';

import { 
  Content,
  NotesOfContent,
  CreateNote,
  PreviewNote,
  } from '~/pages';

import { 
  Switch, 
  Route,
  useRouteMatch,
  } from 'react-router-dom';

import { useContentHub } from './hooks';

export const ContentHub: VFC = () => {
  const { path } = useRouteMatch();

  const { content } = useContentHub();
  
  if (content === null) return <></>
  
  return (
    <div css={{ width: '100%' }}>
      <ContentMenu contentId={content.id} />
      <div css={{ 
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        }}>
        <PageMotion css={{
          width: '100%',
          padding: '60px 20px 20px 40px',
          flexGrow: 1,
          }}>
          <Switch>
            <Route path={`${path}/notes`}>
              <NotesOfContent content={content} />
            </Route>
            <Route path={`${path}/createnote`}>
                  <CreateNote content={content} />
            </Route>
            <Route path={`${path}/updatenote/:noteId`}>
                  <CreateNote content={content} />
            </Route>
            <Route path={`${path}/previewnote/:noteId`}>
                <PreviewNote />
            </Route>
            <Route path={`${path}`}>
                  <Content content={content} />
            </Route>
          </Switch>
        </PageMotion>
      </div>
    </div>
  );
};
