import { useState } from 'react';
import { useRouteMatch, Route, Switch, useParams } from 'react-router-dom';
import { Contents } from '../type';
import DetailView from './DetailView/DetailView';

const OneContents = () => {
  const [oneContents, setOneContents] = useState<Contents | undefined>(undefined);
  const { path } = useRouteMatch();
  const { contentsid } = useParams<{ contentsid: string }>();


  if (oneContents === undefined) return <></>;
  return (
    <Switch>
      <Route path={`${path}/detail`}>
        <DetailView />
      </Route>
    </Switch>
  );
};

export default OneContents;
