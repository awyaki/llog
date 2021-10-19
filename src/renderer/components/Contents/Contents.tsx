import { Switch, Route, useRouteMatch } from 'react-router-dom';
import ContentsList from './ContentsList/ContentsList';
import AddContents from './AddContents/AddContents';
import OneContents from './OneContents/OneContents';

const Contents = () => {
  const { path } = useRouteMatch();
  
  return (
    <Switch>
      <Route path={`${path}/add`}>
        <AddContents />
      </Route>
      <Route exact path={path}>
        <ContentsList />
      </Route>
      <Route path={`${path}/:contentsid`}>
        <OneContents />
      </Route>
    </Switch>
  );
};

export default Contents;
