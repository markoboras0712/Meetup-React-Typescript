import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { meetupsSlice } from 'store/features/meetup/meetupSlice';

export const store = configureStore({
  reducer: { meetups: meetupsSlice.reducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
