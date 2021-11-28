/* eslint-disable react/jsx-one-expression-per-line */
import { useMeetups, MeetupList, RootState } from 'modules/meetups';
import { useEffect } from 'react';
import { autoLogin, clearUser, logout } from 'modules/auth';
import { PrivateAuthGuard } from 'modules/auth';
import { useDispatch, useSelector } from 'react-redux';

export const AllMeetups: React.FC = () => {
  const meetups = useMeetups();
  const user = useSelector((state: RootState) => state.user);
  const userPhoto = useSelector((state: RootState) => state.user.userPhoto);
  const auth = useSelector((state: RootState) => state.user.authenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('Logged out');
    dispatch(logout());
    dispatch(clearUser());
  };
  let content;
  if (meetups.length === 0) {
    return (content = <p>You dont have any meetups yet</p>);
  }
  content = <MeetupList meetups={meetups} />;

  return (
    <PrivateAuthGuard>
      <section>
        {auth && (
          <div>
            <h1>
              Welcome {user.displayName}
              <img
                src={userPhoto as string}
                alt="Nema slike"
                width="50px"
                height="50px"
              />
            </h1>
            <button type="submit" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        {content}
      </section>
    </PrivateAuthGuard>
  );
};
