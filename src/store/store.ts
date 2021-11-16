import { combineReducers, configureStore } from '@reduxjs/toolkit';
import allMeetupsReducer from '../modules/meetups/redux/allMeetupSlice';

export const store = configureStore({
  reducer: { meetups: allMeetupsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const rootReducer = combineReducers({
  meetups: allMeetupsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
