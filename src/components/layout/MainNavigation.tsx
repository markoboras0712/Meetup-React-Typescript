import { Navigation } from 'components/layout';
import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <Navigation />
    </header>
  );
};
