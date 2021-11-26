import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { db, auth, provider } from 'modules/meetups';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from '@firebase/auth';
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

export interface UserData {
  id?: string | undefined | null;
  displayName: string | null | undefined;
  email: string | null | undefined;
  authenticated?: boolean;
  refreshToken?: string | null;
  error?: SerializedError;
  userPhoto?: string | null;
}

export interface SignUpInData {
  email: string;
  password: string;
}

const initialState: UserData = {
  id: null,
  displayName: null,
  email: null,
  authenticated: false,
  refreshToken: undefined,
  error: undefined,
  userPhoto: null,
};

export const signInWithGoogle = createAsyncThunk(
  'signInWithGoogle',
  async (_, thunkAPI) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const { user } = res;
      const userRef = collection(db, 'user');
      const q = query(userRef, where('id', '==', user.uid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length === 0) {
        await addDoc(collection(db, 'user'), {
          id: user.uid,
          authenticated: true,
          displayName: user.displayName,
          email: user.email,
          refreshToken: user.refreshToken,
          userPhoto: user.photoURL,
        });
      }
      querySnapshot.docs.map((document) =>
        console.log('User', document.data()),
      );
      return user;
    } catch (err) {
      console.log(err);
    }
  },
);

export const signUpWithEmailPassword = createAsyncThunk(
  'signUpWithEmailPassword',
  async (userData: SignUpInData) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      const { user } = response;
      await addDoc(collection(db, 'user'), {
        id: user.uid,
        authenticated: true,
        displayName: user.email,
        email: user.email,
        refreshToken: user.refreshToken,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  },
);
export const signInWithEmailPassword = createAsyncThunk(
  'signInWithEmailPassword',
  async (userData: SignUpInData) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      const { user } = response;
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  },
);

export const sendPasswordReset = createAsyncThunk(
  'sendPasswordReset',
  async (userData: SignUpInData) => {
    try {
      const response = await sendPasswordResetEmail(auth, userData.email);
      console.log('Response', response);
    } catch (error) {
      console.log(error);
    }
  },
);

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: 'Didnt logout' });
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.displayName = action.payload?.displayName;
      state.email = action.payload?.email;
      state.userPhoto = action.payload?.userPhoto;
      state.authenticated = true;
      state.id = action.payload?.id;
      state.refreshToken = action.payload?.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.displayName = action.payload?.displayName;
      state.email = action.payload?.email;
      state.userPhoto = action.payload?.photoURL;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(signUpWithEmailPassword.fulfilled, (state, action) => {
      state.displayName = action.payload?.email;
      state.email = action.payload?.email;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
    });
    builder.addCase(signUpWithEmailPassword.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(signInWithEmailPassword.fulfilled, (state, action) => {
      state.displayName = action.payload?.email;
      state.email = action.payload?.email;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
    });
    builder.addCase(signInWithEmailPassword.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(sendPasswordReset.fulfilled, (state, action) => {
      state.authenticated = false;
    });
    builder.addCase(sendPasswordReset.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.displayName = null;
      state.email = null;
      state.authenticated = false;
      state.id = null;
      state.refreshToken = null;
      state.userPhoto = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});
export const { saveUser } = userSlice.actions;
export default userSlice.reducer;
