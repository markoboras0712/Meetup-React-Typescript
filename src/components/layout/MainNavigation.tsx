import { Navigation } from 'components/layout';
import { clearUser, logout, useLogout } from 'modules/auth';
import { isUserAuthenticatedSelector } from 'modules/auth';
import { RootState } from 'modules/meetups';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './MainNavigation.module.css';

export const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <Navigation />
    </header>
  );
};
