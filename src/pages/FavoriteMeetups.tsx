import { useContext } from 'react';
import { FavoritesContext } from 'store/FavoritesContext';
import { MeetupList } from 'components';

export const FavoriteMeetups: React.FC = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = (
      <p>
        You dont have any favorite meetups yet. Return to home page and add
        some.
      </p>
    );
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorite Meetups</h1>
      {content}
    </section>
  );
};
