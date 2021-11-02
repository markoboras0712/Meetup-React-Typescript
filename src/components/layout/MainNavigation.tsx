import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React+Typescript Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Create New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


