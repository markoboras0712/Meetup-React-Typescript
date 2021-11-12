import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Meetup } from 'models/meetup';

interface AllMeetups {
  allMeetups: Meetup[];
  loading: boolean;
  error: string | unknown;
}

const allMeetupsInitialState: AllMeetups = {
  allMeetups: [],
  loading: false,
  error: '',
};

export const fetchMeetups = createAsyncThunk('getAllMeetups', async () => {
  try {
    const response = await fetch(
      'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
    );
    if (response.status !== 200) {
      throw new Error('cannot fetch data');
    }
    const allMeetups = await response.json();
    const meetups: Meetup[] = [];
    Object.keys(allMeetups).map((key) =>
      meetups.push({ ...allMeetups[key], id: key }),
    );
    return meetups as Meetup[];
  } catch (error) {
    throw new Error('didnt fetch data');
  }
});

export const postMeetup = createAsyncThunk(
  'postMeetup',
  async (myData: Meetup) => {
    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myData),
    };
    try {
      const response = await fetch(
        'https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups.json',
        settings,
      );
      if (!response.ok) {
        throw new Error('Post failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const editMeetup = createAsyncThunk(
  'editMeetup',
  async (myData: Meetup) => {
    const settings = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myData),
    };
    try {
      const response = await fetch(
        `https://meetups-react-typescript-default-rtdb.firebaseio.com/meetups/${myData.id}.json`,
        settings,
      );
      if (!response.ok) {
        throw new Error('Post failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

export const allMeetupsSlices = createSlice({
  name: 'allMeetups',
  initialState: allMeetupsInitialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Meetup>) => {
      const index = state.allMeetups.findIndex(
        (meetup) => meetup.id === action.payload.id,
      );
      state.allMeetups[index].isFavorite = true;
    },
    removeFavorite: (state, action: PayloadAction<Meetup>) => {
      const index = state.allMeetups.findIndex(
        (meetup) => meetup.id === action.payload.id,
      );
      state.allMeetups[index].isFavorite = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeetups.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMeetups.fulfilled,
      (state, action: PayloadAction<Meetup[]>) => {
        state.allMeetups = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchMeetups.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postMeetup.fulfilled,
      (state, action: PayloadAction<Meetup>) => {
        state.allMeetups.concat(action.payload);
        state.loading = false;
      },
    );
    builder.addCase(postMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editMeetup.fulfilled,
      (state, action: PayloadAction<Meetup>) => {
        const index = state.allMeetups.findIndex(
          (meetup) => meetup.id === action.payload.id,
        );
        state.allMeetups[index] = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(editMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { addFavorite, removeFavorite } = allMeetupsSlices.actions;
