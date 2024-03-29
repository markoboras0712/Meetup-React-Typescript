import { Router, RouteComponentProps } from '@reach/router';
import { Routes } from 'fixtures';
import {
  AllMeetups,
  FavoriteMeetups,
  MeetupPage,
  NotFound,
  NewMeetup,
  Login,
} from 'views';

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
      <RouterPage path={Routes.NewMeetupPage} pageComponent={<NewMeetup />} />
      <RouterPage path={Routes.MeetupPage} pageComponent={<MeetupPage />} />
      <RouterPage path={Routes.Login} pageComponent={<Login />} />
      <RouterPage path={Routes.NotFoundPage} pageComponent={<NotFound />} />
    </Router>
  );
};
