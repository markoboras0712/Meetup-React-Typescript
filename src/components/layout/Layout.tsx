import classes from './Layout.module.css';
import {MainNavigation} from 'components';

export const Layout: React.FC = ({children}) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

