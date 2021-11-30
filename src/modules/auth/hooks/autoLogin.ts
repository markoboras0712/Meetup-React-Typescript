import { auth } from 'modules/meetups';
import { UserData } from 'models/user';
import { clearUser, logout, saveUser } from 'modules/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

export const autoLogin = () => {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      dispatch(logout());
      dispatch(clearUser());
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
