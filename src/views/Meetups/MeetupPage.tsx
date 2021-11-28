import { RouteComponentProps, useParams } from '@reach/router';
import { useMeetup, MeetupItem } from 'modules/meetups';
import { PrivateAuthGuard } from 'modules/auth';

export const MeetupPage: React.FC<RouteComponentProps> = () => {
  const { meetup, params } = useMeetup();
  return (
    <PrivateAuthGuard>
      <MeetupItem
        key={params.id}
        id={params.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
        isFavorite={meetup.isFavorite}
      />
    </PrivateAuthGuard>
  );
};
