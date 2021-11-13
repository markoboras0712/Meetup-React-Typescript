/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { RouteComponentProps, useParams } from '@reach/router';
import { MeetupItem } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeetup } from 'store';
import { Card } from 'components';
import { RootState } from 'store/store';

interface MeetupProps extends RouteComponentProps {
  id?: string;
}

export const MeetupPage: React.FC<MeetupProps> = ({ id }) => {
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
