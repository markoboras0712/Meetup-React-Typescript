import { useFavoriteMeetups, MeetupList } from 'modules/meetups';
import { PrivateAuthGuard } from 'modules/auth';

export const FavoriteMeetups: React.FC = () => {
  const favoriteMeetups = useFavoriteMeetups();
  let content;
  if (favoriteMeetups.length === 0) {
    return (content = (
      <p>
        You dont have any favorite meetups yet. Return to home page and addsome.
      </p>
    ));
  }
  content = <MeetupList meetups={favoriteMeetups} />;

  return (
    <PrivateAuthGuard>
      <section>
        <h1>My Favorite Meetups</h1>
        {content}
      </section>
    </PrivateAuthGuard>
  );
};
