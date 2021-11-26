import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as rawUseSelector,
} from 'react-redux';
import { userSlice } from 'modules/auth';
import allMeetupsReducer from './allMeetupSlice';

export const store = configureStore({
  reducer: { meetups: allMeetupsReducer, user: userSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const rootReducer = combineReducers({
  meetups: allMeetupsReducer,
  user: userSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
