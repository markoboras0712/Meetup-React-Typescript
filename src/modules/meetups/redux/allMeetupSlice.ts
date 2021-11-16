import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Meetup, AllMeetups } from 'models';
import { ACTION, FIRESTORE } from 'modules/meetups';
import { db } from 'store';
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

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

export const fetchMeetups = createAsyncThunk(ACTION.GetMeetups, async () => {
  try {
    const querySnapshot = await getDocs(collection(db, FIRESTORE.Meetups));
    return querySnapshot.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    })) as Meetup[];
  } catch (error) {
    throw new Error('didnt fetch data');
  }
});

export const fetchMeetup = createAsyncThunk(
  ACTION.GetMeetup,
  async (id: string) => {
    try {
      const docSnap = await getDoc(doc(db, FIRESTORE.Meetups, id));
      console.log(docSnap.data());
      return docSnap.data() as Meetup;
    } catch (error) {
      throw new Error('didnt fetch data');
    }
  },
);

export const postMeetup = createAsyncThunk(
  ACTION.PostMeetup,
  async (myData: Meetup) => {
    try {
      const docRef = await addDoc(collection(db, FIRESTORE.Meetups), {
        image: myData.image,
        description: myData.description,
        title: myData.title,
        address: myData.address,
        isFavorite: myData.isFavorite,
      });
    } catch (error) {
      throw new Error('didnt post data');
    }
  },
);

export const editMeetup = createAsyncThunk(
  ACTION.EditMeetup,
  async (myData: Meetup) => {
    try {
      await setDoc(doc(db, FIRESTORE.Meetups, myData.id as string), {
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
  name: ACTION.Meetups,
  initialState: allMeetupsInitialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Meetup>) => {
      const index = state.allMeetups.findIndex(
        (meetup) => meetup.id === action.payload.id,
      );
      state.allMeetups[index].isFavorite = !state.allMeetups[index].isFavorite;
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
export const { toggleFavorite } = allMeetupsSlices.actions;
export default allMeetupsSlices.reducer;
