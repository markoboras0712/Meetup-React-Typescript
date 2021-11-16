import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeetups } from 'modules/meetups/redux';
import { MeetupList } from 'components';
import { RootState } from 'modules/meetups/redux';

export const FavoriteMeetups: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeetups());
  }, []);
  const meetups = useSelector((state: RootState) => state.meetups.allMeetups);
  const hasFavoriteMeetups = meetups.some((meetup) => meetup.isFavorite);
  const favoriteMeetups = meetups.filter((meetup) => meetup.isFavorite);
  let content;
  if (!hasFavoriteMeetups) {
    return (content = (
      <p>
        You dont have any favorite meetups yet. Return to home page and addsome.
      </p>
    ));
  }
  content = <MeetupList meetups={favoriteMeetups} />;

  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
};
