import { MeetupList } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetups } from 'store/features/meetup/allMeetupSlice';
import { RootState } from 'store/store';

export const AllMeetups: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);
  const meetups = useSelector((state: RootState) => state.meetups);
  let content;
  if (meetups.allMeetups?.length === 0) {
    content = <p>You dont have any meetups yet</p>;
  } else {
    content = <MeetupList meetups={meetups.allMeetups} />;
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
};
