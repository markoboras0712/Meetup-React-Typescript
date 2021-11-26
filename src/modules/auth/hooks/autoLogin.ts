import { fetchMeetups, RootState } from 'modules/meetups';
import { auth, provider } from 'modules/meetups';
import { logout, saveUser, UserData } from 'modules/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const autoLogin = () => {
  const dispatch = useDispatch();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(logout());
      }
      if (user) {
        console.log('Auto login', user);
        const userData: UserData = {
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          refreshToken: user.refreshToken,
          userPhoto: user.photoURL,
        };
        dispatch(saveUser(userData));
        console.log('User refresh token', user.refreshToken);
      }
    });
};
