import { Link } from '@reach/router';
import { Routes } from 'models';
import { logout, useLogout } from 'modules/auth';
import { RootState } from 'modules/meetups';
import { useDispatch, useSelector } from 'react-redux';

export const Navigation: React.FC = () => {
  const authenticated = useSelector(
    (state: RootState) => state.user.authenticated,
  );
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.Home}>All Meetups</Link>
        </li>
        <li>
          <Link to={Routes.FavoritesPage}>Favorite Meetups</Link>
        </li>
        <li>
          <Link to={Routes.NewMeetupPage}>Create New Meetup</Link>
        </li>
        {authenticated ? (
          <Link to={Routes.Login}>Logout</Link>
        ) : (
          <Link to={Routes.Login}>Login</Link>
        )}
      </ul>
    </nav>
  );
};
