import { Route, Switch } from 'react-router-dom';
import { AllMeetups, Favorites, NewMeetup, NotFound } from 'pages';
import { Layout } from 'components';

export enum Paths {
  Home = '/',
  Favorites = '/favorites',
  NewMeetup = '/new-meetup',
  NotFound = '*',
}

export const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={Paths.Home} exact>
          <AllMeetups />
        </Route>
        <Route path={Paths.Favorites} exact>
          <Favorites />
        </Route>
        <Route path={Paths.NewMeetup} exact>
          <NewMeetup />
        </Route>
        <Route path={Paths.NotFound}>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
};
