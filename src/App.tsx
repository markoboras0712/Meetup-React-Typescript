import { Route, Switch } from 'react-router-dom';
import {AllMeetups} from './pages/AllMeetups';
import {Favorites} from './pages/Favorites';
import {NewMeetup} from './pages/NewMeetup';
import {Layout} from './components/layout/Layout';
import { NotFound } from 'pages/NotFound';

enum paths {
  home = '/',
  favorites = '/favorites',
  newMeetup = '/new-meetup',
  notFound = '*',
}

export const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={paths.home} exact>
          <AllMeetups />
        </Route>
        <Route path={paths.favorites} exact>
          <Favorites />
        </Route>
        <Route path={paths.newMeetup} exact>
          <NewMeetup />
        </Route>
        <Route path={paths.notFound}>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
};
