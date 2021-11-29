import { Router, RouteComponentProps } from '@reach/router';
import { Routes } from 'fixtures';
import { AllMeetups, FavoriteMeetups, MeetupPage, NotFound } from 'views';
import { NewMeetupForm } from 'modules/meetups';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
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
  );
};
