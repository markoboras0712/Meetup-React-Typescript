import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
  isFavorite: boolean;
}

interface AllMeetups {
  allMeetups: Meetup[];
  favoriteMeetups: [];
  loading: boolean;
  error: string | unknown;
}

const allMeetupsInitialState: AllMeetups = {
  allMeetups: [],
  favoriteMeetups: [],
  loading: false,
  error: '',
};

export const fetchMeetups = createAsyncThunk(
  'getAllMeetups',
  async (dispatch, getState) => {
    const response = await fetch(
      'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
    );
    const allMeetups = await response.json();
    const meetups: Meetup[] = [];
    Object.keys(allMeetups).map((key) =>
      meetups.push({ ...allMeetups[key], id: key }),
    );
    return meetups;
  },
);

export const postMeetup = createAsyncThunk(
  'postMeetup',
  async (myData: Meetup) => {
    const {
        id, title, image, address, description, isFavorite,
     } = myData;
    return fetch(
      'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          image,
          address,
          description,
          isFavorite,
        }),
      },
    )
      .then((res) => res.json())
      .then((res) => res);
  },
);

export const allMeetupsSlices = createSlice({
  name: 'allMeetups',
  initialState: allMeetupsInitialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeetups.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMeetups.fulfilled, (state, action) => {
      state.allMeetups = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMeetups.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postMeetup.fulfilled, (state, action) => {
      state.allMeetups.concat(action.payload);
      state.loading = false;
    });
    builder.addCase(postMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default allMeetupsSlices.reducer;
