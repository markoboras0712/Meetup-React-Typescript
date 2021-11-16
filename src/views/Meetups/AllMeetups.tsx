import { MeetupList } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetups } from 'modules/meetups/redux';
import { RootState } from 'store/store';

export const AllMeetups: React.FC = () => {
  const dispatch = useDispatch();
  const meetups = useSelector((state: RootState) => state.meetups.allMeetups);
  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);
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
