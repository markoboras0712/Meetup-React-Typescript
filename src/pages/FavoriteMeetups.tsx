import { useContext } from 'react';
import { FavoritesContext } from 'store/FavoritesContext';
import { useDispatch, useSelector } from 'react-redux';
import { MeetupList } from 'components';
import { RootState } from 'store/store';

export const FavoriteMeetups: React.FC = () => {
  const dispatch = useDispatch();
  const meetups = useSelector((state: RootState) => state.meetups);
  const hasFavoriteMeetups = meetups.allMeetups.some(
    (meetup) => meetup.isFavorite === true,
  );
  const favoriteMeetups = meetups.allMeetups.filter((meetup) => meetup.isFavorite === true);
  console.log(favoriteMeetups);
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (!hasFavoriteMeetups) {
    content = (
      <p>
        You dont have any favorite meetups yet. Return to home page and add
        some.
      </p>
    );
  } else {
    content = <MeetupList meetups={favoriteMeetups} />;
  }
  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
};
