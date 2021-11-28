import { MainNavigation } from 'components';
import { useLogout } from 'modules/auth';
import classes from './Layout.module.css';

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};
