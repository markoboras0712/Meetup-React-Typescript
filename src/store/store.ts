import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allMeetupReducer from './features/meetup/allMeetupSlice';

export const store = configureStore({
  reducer: { meetups: allMeetupReducer },
});

export const rootReducer = combineReducers({
  meetups: allMeetupReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
