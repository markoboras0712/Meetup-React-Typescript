import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <header>
      <div>React+Typescript Meetups</div>
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

export default MainNavigation;
