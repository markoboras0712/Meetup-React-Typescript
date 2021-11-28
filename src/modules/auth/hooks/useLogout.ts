import { Link } from '@reach/router';
import { Routes } from 'models';
import { logout } from 'modules/auth';
import { auth, fetchMeetups, RootState } from 'modules/meetups';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLogout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
};
