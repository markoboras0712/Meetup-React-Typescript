/* eslint-disable react/jsx-one-expression-per-line */
import { useMeetups, MeetupList, RootState } from 'modules/meetups';
import { useEffect } from 'react';
import { autoLogin, clearUser, logout } from 'modules/auth';
import { PrivateAuthGuard } from 'modules/auth';
import { useDispatch, useSelector } from 'react-redux';

export const AllMeetups: React.FC = () => {
  const meetups = useMeetups();
  return (
    <section>
      <h1>Meetups</h1>

      {!meetups.length ? (
        <p>You dont have any meetups yet</p>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </section>
  );
};
