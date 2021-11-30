/* eslint-disable react/jsx-one-expression-per-line */
import { useMeetups, MeetupList } from 'modules/meetups';
import { PrivateAuthGuard, User } from 'modules/auth';

export const AllMeetups: React.FC = () => {
  const meetups = useMeetups();
  return (
    <PrivateAuthGuard>
      <section>
        <h1>Meetups</h1>
        <User />

        {!meetups.length ? (
          <p>You dont have any meetups yet</p>
        ) : (
          <MeetupList meetups={meetups} />
        )}
      </section>
    </PrivateAuthGuard>
  );
};
