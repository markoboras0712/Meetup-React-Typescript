import { Link } from '@reach/router';
import { Routes } from 'models';
import classes from './MainNavigation.module.css';

export const Navigation: React.FC = () => (
  <nav>
    <ul className={classes.header__ul}>
      <li className={classes.header__li}>
        <Link to={Routes.Home} className={classes.header__a}>
          All Meetups
        </Link>
      </li>
      <li className={classes.header__li}>
        <Link to={Routes.FavoritesPage} className={classes.header__a}>
          Favorite Meetups
        </Link>
      </li>
      <li className={classes.header__li}>
        <Link to={Routes.NewMeetupPage} className={classes.header__a}>
          Create New Meetup
        </Link>
      </li>
    </ul>
  </nav>
);
