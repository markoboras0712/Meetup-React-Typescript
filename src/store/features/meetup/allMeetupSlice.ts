import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Meetup } from 'models/meetup';
import { db } from 'store';
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

interface AllMeetups {
  allMeetups: Meetup[];
  meetup: Meetup;
  loading: boolean;
  error: string | unknown;
}

const allMeetupsInitialState: AllMeetups = {
  allMeetups: [],
  meetup: {
    title: '',
    image: '',
    description: '',
    address: '',
    isFavorite: false,
  },
  loading: false,
  error: '',
};

export const fetchMeetups = createAsyncThunk('getAllMeetups', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'meetups'));
    return querySnapshot.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    })) as Meetup[];
  } catch (error) {
    throw new Error('didnt fetch data');
  }
});

export const fetchMeetup = createAsyncThunk(
  'getMeetup',
  async (id: string) => {
    try {
      const docSnap = await getDoc(doc(db, 'meetups', id));
      console.log(docSnap.data());
      return docSnap.data() as Meetup;
    } catch (error) {
      throw new Error('didnt fetch data');
    }
  },
);

export const postMeetup = createAsyncThunk(
  'postMeetup',
  async (myData: Meetup) => {
    try {
      const docRef = await addDoc(collection(db, 'meetups'), {
        image: myData.image,
        description: myData.description,
        title: myData.title,
        address: myData.address,
        isFavorite: myData.isFavorite,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      throw new Error('didnt post data');
    }
  },
);

export const editMeetup = createAsyncThunk(
  'editMeetup',
  async (myData: Meetup) => {
    try {
      await setDoc(doc(db, 'meetups', myData.id as string), {
        image: myData.image,
        description: myData.description,
        title: myData.title,
        address: myData.address,
        isFavorite: myData.isFavorite,
      });
    } catch (error) {
      throw new Error('didnt edit data');
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
    builder.addCase(fetchMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMeetup.fulfilled,
      (state, action: PayloadAction<Meetup>) => {
        state.meetup = action.payload;
        state.loading = false;
      },
    );
    builder.addCase(fetchMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postMeetup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(editMeetup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editMeetup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(editMeetup.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { addFavorite, removeFavorite } = allMeetupsSlices.actions;
