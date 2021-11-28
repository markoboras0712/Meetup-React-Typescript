import { useEffect } from 'react';
import { Routes } from 'models';
import { RootState } from 'modules/meetups';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';

export const PrivateAuthGuard: React.FC = ({ children }) => {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = user.authenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(Routes.Login);
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};
