import { MeetupList } from 'components';
import { MeetupsContext } from 'store/AllMeetupsContext';
import { useContext, useEffect } from 'react';

export const AllMeetups: React.FC = () => {
  const meetupsCtx = useContext(MeetupsContext);
  meetupsCtx.getMeetups();
  let content;
  if (meetupsCtx.meetups.length === 0) {
    content = <p>You dont have any meetups yet</p>;
  } else {
    content = <MeetupList meetups={meetupsCtx.meetups} />;
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
};
