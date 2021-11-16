import { RootState } from 'modules/meetups/redux/store';
import { fetchMeetup } from 'modules/meetups';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

export const useMeetup = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeetup(params.id));
  }, []);
  const meetup = useSelector((state: RootState) => state.meetups.meetup);
  return { params, meetup };
};
