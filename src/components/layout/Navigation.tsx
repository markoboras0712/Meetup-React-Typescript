import { Link } from '@reach/router';
import { Routes } from 'models';

export const Navigation: React.FC = () => {
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
      </ul>
    </nav>
  );
};
