/* eslint-disable react/jsx-props-no-spreading */
import { Link } from '@reach/router';
import { Paths } from 'App';
import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => (
  <header className={classes.header}>
    <div className={classes.logo}>React+Typescript Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to={Paths.Home}>All Meetups</Link>
        </li>
        <li>
          <Link to={Paths.FavoritesPage}>Favorite Meetups</Link>
        </li>
        <li>
          <Link to={Paths.NewMeetupPage}>Create New Meetup</Link>
        </li>
      </ul>
    </nav>
  </header>
);
