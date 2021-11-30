import { useFavoriteMeetups, MeetupList } from 'modules/meetups';
import { PrivateAuthGuard } from 'modules/auth';

export const FavoriteMeetups: React.FC = () => {
  const favoriteMeetups = useFavoriteMeetups();

  return (
    <PrivateAuthGuard>
      <section>
        <h1>My Favorite Meetups</h1>
        {!favoriteMeetups.length ? (
          <p>
            You dont have any favorite meetups yet. Return to home page and add
            some
          </p>
        ) : (
          <MeetupList meetups={favoriteMeetups} />
        )}
      </section>
    </PrivateAuthGuard>
  );
};
