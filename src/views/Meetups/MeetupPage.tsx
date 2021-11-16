import { RouteComponentProps, useParams } from '@reach/router';
import { useMeetup } from 'modules/meetups/hooks';
import { MeetupItem } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeetup, RootState } from 'modules/meetups';

export const MeetupPage: React.FC<RouteComponentProps> = () => {
  const { meetup, params } = useMeetup();
  return (
    <MeetupItem
      key={params.id}
      id={params.id}
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
      isFavorite={meetup.isFavorite}
    />
  );
};
