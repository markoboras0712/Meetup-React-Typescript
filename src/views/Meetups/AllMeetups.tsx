import { useMeetups, MeetupList } from 'modules/meetups';
import { useEffect } from 'react';
import { autoLogin } from 'modules/auth';

export const AllMeetups: React.FC = () => {
  const meetups = useMeetups();
  let content;
  if (meetups.length === 0) {
    return (content = <p>You dont have any meetups yet</p>);
  }
  content = <MeetupList meetups={meetups} />;
  return (
    <section>
      <h1>Meetups</h1>
      {content}
    </section>
  );
};
