import { Link } from 'react-router-dom';
import {paths} from 'App'
import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React+Typescript Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={paths.home}>All Meetups</Link>
          </li>
          <li>
            <Link to={paths.favorites}>Favorite Meetups</Link>
          </li>
          <li>
            <Link to={paths.newMeetup}>Create New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


