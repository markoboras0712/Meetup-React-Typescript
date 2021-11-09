import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { allMeetupsSlices } from 'store/features/meetup/allMeetupSlice';

export const store = configureStore({
  reducer: { meetups: allMeetupsSlices.reducer },
});

export const rootReducer = combineReducers({
  meetups: allMeetupsSlices.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
