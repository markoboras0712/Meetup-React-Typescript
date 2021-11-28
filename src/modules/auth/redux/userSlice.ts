import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';
import { navigate } from '@reach/router';
import { Routes, UserData } from 'models';
import { db, auth, provider } from 'modules/meetups';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from '@firebase/auth';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

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
  userPhoto: null,
  loading: false,
  error: undefined,
};

export const signInWithGoogle = createAsyncThunk(
  'signInWithGoogle',
  async () => {
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
      navigate(Routes.Home);
      return user;
    } catch (err) {
      throw new Error('Didnt sign in');
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
      navigate(Routes.Home);
      return user;
    } catch (error) {
      throw new Error('Didng signup');
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
      navigate(Routes.Home);
      return user;
    } catch (error) {
      throw new Error('Didnt sign in');
    }
  },
);

export const sendPasswordReset = createAsyncThunk(
  'sendPasswordReset',
  async (userData: SignUpInData, thunkAPI) => {
    try {
      const response = await sendPasswordResetEmail(auth, userData.email);
      navigate(Routes.Login);
    } catch (error) {
      throw new Error('didnt send password reset');
    }
  },
);

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    navigate(Routes.Login);
  } catch (error) {
    throw new Error('didnt logout');
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
    clearUser: (state) => {
      state.displayName = null;
      state.email = null;
      state.userPhoto = null;
      state.authenticated = false;
      state.id = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInWithGoogle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.displayName = action.payload?.displayName;
      state.email = action.payload?.email;
      state.userPhoto = action.payload?.photoURL;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
      state.loading = false;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(signUpWithEmailPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signUpWithEmailPassword.fulfilled, (state, action) => {
      state.displayName = action.payload?.email;
      state.email = action.payload?.email;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
      state.loading = false;
    });
    builder.addCase(signUpWithEmailPassword.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(signInWithEmailPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signInWithEmailPassword.fulfilled, (state, action) => {
      state.displayName = action.payload?.email;
      state.email = action.payload?.email;
      state.authenticated = true;
      state.id = action.payload?.uid;
      state.refreshToken = action.payload?.refreshToken;
      state.loading = false;
    });
    builder.addCase(signInWithEmailPassword.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(sendPasswordReset.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(sendPasswordReset.fulfilled, (state, action) => {
      state.authenticated = false;
      state.loading = false;
    });
    builder.addCase(sendPasswordReset.rejected, (state, action) => {
      state.error = action.error;
    });
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.displayName = null;
      state.email = null;
      state.authenticated = false;
      state.id = null;
      state.refreshToken = null;
      state.userPhoto = null;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});
export const { saveUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
