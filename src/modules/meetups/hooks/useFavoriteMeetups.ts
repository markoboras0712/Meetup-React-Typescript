import { fetchMeetups, RootState } from 'modules/meetups';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFavoriteMeetups = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeetups());
  }, [dispatch]);
  const meetups = useSelector((state: RootState) => state.meetups.allMeetups);
  return meetups.filter((meetup) => meetup.isFavorite);
};
