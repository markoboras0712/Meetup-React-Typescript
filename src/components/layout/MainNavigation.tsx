import { Link } from 'react-router-dom';
import {Paths} from 'App'
import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React+Typescript Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={Paths.Home}>All Meetups</Link>
          </li>
          <li>
            <Link to={Paths.Favorites}>Favorite Meetups</Link>
          </li>
          <li>
            <Link to={Paths.NewMeetup}>Create New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


