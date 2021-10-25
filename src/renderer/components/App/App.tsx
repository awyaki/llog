import { useContext } from 'react';
import { container } from './style';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Review from '../Review/Review';
import Settings from '../Settings/Settings';
import AddNote from '../AddNote/AddNote';
import NotesList from '../NotesList/NotesList';
import SearchNotesCondition from '../SearchNotesCondition/SearchNotesCondition';
import Contents from '../Contents/Contents';
import TimeLine from '../TimeLine/TimeLine';
import { reviewsStub } from '../../stub/reviewsStub';


const App = () => {

  return (
    <div css={container}>
      <HashRouter>
        <Switch>
          <Route path="/timeline">
            <TimeLine />
          </Route>
          <Route path="/review">
            <Review reviews={reviewsStub}/>
          </Route>
          <Route path="/note/add/:contentsid">
            <AddNote />
          </Route>
          <Route path="/contents">
            <Contents />
          </Route>
          <Route path="/notes/search">
            <SearchNotesCondition />
          </Route>
          <Route path="/notes">
            <NotesList />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="*">
            <Menu />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
