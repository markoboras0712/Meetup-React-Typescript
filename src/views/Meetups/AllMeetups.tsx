import { useMeetups } from 'modules/meetups/hooks';
import { MeetupList } from 'components';

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
