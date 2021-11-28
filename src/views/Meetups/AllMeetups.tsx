/* eslint-disable react/jsx-one-expression-per-line */
import { useMeetups, MeetupList } from 'modules/meetups';
import { PrivateAuthGuard, User } from 'modules/auth';

export const AllMeetups: React.FC = () => {
  const meetups = useMeetups();
  let content;
  if (meetups.length === 0) {
    return (content = <p>You dont have any meetups yet</p>);
  }
  content = <MeetupList meetups={meetups} />;
  return (
    <PrivateAuthGuard>
      <section>
        <User />
        {content}
      </section>
    </PrivateAuthGuard>
  );
};
