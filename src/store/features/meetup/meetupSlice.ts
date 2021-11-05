/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface MeetupSliceState {
  meetups: Meetup[];
}

export const initialState: MeetupSliceState = {
  meetups: [],
};

export const meetupsSlice = createSlice({
  name: 'meetup',
  initialState,
  reducers: {
    replaceMeetups: (state, action: PayloadAction<MeetupSliceState>) => {
      state.meetups = action.payload.meetups;
    },
  },
});

export const meetupActions = meetupsSlice.actions;
