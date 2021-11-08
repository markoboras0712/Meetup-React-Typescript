import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

// udemy tutorial
interface AllMeetups {
  allMeetups: Meetup[];
  loading: boolean;
  error: string | unknown;
}

// udemy tutorial
const allMeetupsInitialState: AllMeetups = {
  allMeetups: [],
  loading: false,
  error: '',
};

export const fetchMeetups = createAsyncThunk('getAllMeetups', async () => {
  const response = await fetch(
    'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
  );
  const allMeetups = await response.json();
  const meetups: Meetup[] = [];
  Object.keys(allMeetups).map((key) =>
    meetups.push({ ...allMeetups[key], id: key }),
  );
  return meetups;
});

export const allMeetupsSlices = createSlice({
  name: 'allMeetups',
  initialState: allMeetupsInitialState,
  reducers: {},
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
  },
});

export default allMeetupsSlices.reducer;
