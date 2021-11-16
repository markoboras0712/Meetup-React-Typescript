import { RouteComponentProps, useParams } from '@reach/router';
import { MeetupItem } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeetup, RootState } from 'modules/meetups';

export const MeetupPage: React.FC<RouteComponentProps> = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const meetup = useSelector((state: RootState) => state.meetups.meetup);
  useEffect(() => {
    dispatch(fetchMeetup(params.id));
  }, []);
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
