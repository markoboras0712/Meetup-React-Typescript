import { RootState } from 'modules/meetups/redux/store';
import { fetchMeetups } from 'modules/meetups';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useMeetups = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeetups());
  }, [dispatch]);
  return useSelector((state: RootState) => state.meetups.allMeetups);
};
