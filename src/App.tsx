import { Route, Switch } from 'react-router-dom';
import { AllMeetups, FavoriteMeetups, NotFound } from 'pages';
import { NewMeetupForm } from 'components';
import { Layout } from 'components';

export enum Paths {
  Home = '/',
  FavoritesPage = '/favorites',
  NewMeetupPage = '/new-meetup',
  NotFoundPage = '*',
}

export const App: React.FC = () => (
  <Layout>
    <Switch>
      <Route path={Paths.Home} exact>
        <AllMeetups />
      </Route>
      <Route path={Paths.FavoritesPage} exact>
        <FavoriteMeetups />
      </Route>
      <Route path={Paths.NewMeetupPage} exact>
        <NewMeetupForm />
      </Route>
      <Route path={Paths.NotFoundPage}>
        <NotFound />
      </Route>
    </Switch>
  </Layout>
);
