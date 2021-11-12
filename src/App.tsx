import { Router, RouteComponentProps } from '@reach/router';
import { AllMeetups, FavoriteMeetups, NotFound } from 'pages';
import { NewMeetupForm } from 'components';
import { Layout } from 'components';

export enum Paths {
  Home = '/',
  FavoritesPage = '/favorites',
  NewMeetupPage = '/new-meetup',
  NotFoundPage = '*',
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const App: React.FC = () => (
  <Layout>
    <Router>
      <RouterPage path={Paths.Home} pageComponent={<AllMeetups />} />
      <RouterPage
        path={Paths.FavoritesPage}
        pageComponent={<FavoriteMeetups />}
      />
      <RouterPage
        path={Paths.NewMeetupPage}
        pageComponent={<NewMeetupForm />}
      />
      <RouterPage path={Paths.NotFoundPage} pageComponent={<NotFound />} />
    </Router>
  </Layout>
);
