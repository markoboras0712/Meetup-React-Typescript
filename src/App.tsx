/* eslint-disable @typescript-eslint/no-shadow */
import { Router, RouteComponentProps } from '@reach/router';
import { Routes } from 'models';
import { AllMeetups, FavoriteMeetups, MeetupPage, NotFound } from 'views';
import { NewMeetupForm } from 'modules/meetups';
import { Layout } from 'components';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const App: React.FC = () => (
  <Layout>
    <Router>
      <RouterPage path={Routes.Home} pageComponent={<AllMeetups />} />
      <RouterPage
        path={Routes.FavoritesPage}
        pageComponent={<FavoriteMeetups />}
      />
      <RouterPage
        path={Routes.NewMeetupPage}
        pageComponent={<NewMeetupForm />}
      />
      <RouterPage path={Routes.MeetupPage} pageComponent={<MeetupPage />} />
      <RouterPage path={Routes.NotFoundPage} pageComponent={<NotFound />} />
    </Router>
  </Layout>
);
