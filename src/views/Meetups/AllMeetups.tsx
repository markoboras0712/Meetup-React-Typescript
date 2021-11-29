import { useMeetups, MeetupList } from 'modules/meetups';

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
