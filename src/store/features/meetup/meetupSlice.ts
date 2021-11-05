/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchMeetups } from './meetupActions';
import { RootState, AppThunk } from '../../store';

export interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface MeetupSliceState {
  list: Meetup[];
  error: string;
  status: string;
}

type MeetupsState = {
  // In `status` we will watch
  // if todos are being loaded.
  status: 'loading' | 'idle';

  // `error` will contain an error message.
  error: string | null;
  list: Meetup[];
};

export const initialState: MeetupSliceState = {
  list: [],
  error: 'null',
  status: 'idle',
};

export const getMeetups = createAsyncThunk('meetups/getMeetups', async () => {
  return fetch(
    'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
  ).then((response) => response.json());
});

export const selectStatus = (state: RootState) => state.meetups.status;

export const meetupsSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When we send a request,
    // `fetchTodos.pending` is being fired:
    builder.addCase(getMeetups.pending, (state) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.status = 'loading';
      state.error = 'null';
    });

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(getMeetups.fulfilled, (state, { payload }) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:
      state.list.push(...payload);
      state.status = 'idle';
    });

    // When a server responses with an error:
    builder.addCase(getMeetups.rejected, (state, { payload }) => {
      // We show the error message
      // and change `status` back to `idle` again.
      if (payload) state.status = 'idle';
    });
  },
});

export const meetupActions = meetupsSlice.actions;
