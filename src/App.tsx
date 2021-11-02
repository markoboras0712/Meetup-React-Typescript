import { Route, Switch } from 'react-router-dom';
import {AllMeetups,Favorites,NewMeetup,NotFound} from 'pages';
import {Layout} from 'components';


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
