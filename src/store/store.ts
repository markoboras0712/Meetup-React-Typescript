import { configureStore } from '@reduxjs/toolkit';
import { meetupsSlice } from 'store/features/meetup/meetupSlice';

export const store = configureStore({
  reducer: { meetups: meetupsSlice.reducer },
});

type RootState = ReturnType<typeof store.getState>;
export const selectMeetups = (state: RootState) => state.meetups.meetups;
