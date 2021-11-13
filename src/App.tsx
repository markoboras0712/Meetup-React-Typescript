/* eslint-disable @typescript-eslint/no-shadow */
import { Router, RouteComponentProps } from '@reach/router';
import { AllMeetups, FavoriteMeetups, MeetupPage, NotFound } from 'pages';
import { NewMeetupForm } from 'components';
import { Layout } from 'components';

export enum Paths {
  Home = '/',
  FavoritesPage = '/favorites',
  NewMeetupPage = '/new-meetup',
  MeetupPage = 'meetups/:id',
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
      <RouterPage path={Paths.MeetupPage} pageComponent={<MeetupPage />} />
      <RouterPage path={Paths.NotFoundPage} pageComponent={<NotFound />} />
    </Router>
  </Layout>
);
