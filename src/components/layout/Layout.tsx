import { MainNavigation } from 'components';
import classes from './Layout.module.css';

export const Layout: React.FC = ({ children }) => (
  <div>
    <MainNavigation />
    <main className={classes.main}>{children}</main>
  </div>
);
