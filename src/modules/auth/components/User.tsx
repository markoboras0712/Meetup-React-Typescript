/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect } from 'react';
import { Routes } from 'fixtures';
import { RootState } from 'modules/meetups';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, logout } from 'modules/auth';

export const User: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('Logged out');
    dispatch(logout());
    dispatch(clearUser());
  };
  const image = (
    <h1>
      Welcome {user.displayName}
      {user.userPhoto && (
        <img
          src={user.userPhoto as string}
          alt="Nema slike"
          width="50px"
          height="50px"
        />
      )}
    </h1>
  );

  return (
    <div>
      {image}
      <button type="submit" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
