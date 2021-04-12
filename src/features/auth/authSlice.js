import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../app/server';

const initialState = {
  authToken: null,
  loggedIn: false,
  status: 'idle',
};

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async () => {
    const response = await authAPI('registration');
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
    'auth/loginUser',
    async () => {
      const response = await authAPI('login');
      return response.data;
    }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authToken = null;
      state.loggedIn = false;
      state.status = 'idle';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authToken = action.payload;
        state.loggedIn = true
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authToken = action.payload;
        state.loggedIn = true
      });
  },
});

export const { logout } = authSlice.actions;

export const isUserLogged = (state) => state.auth.loggedIn;

export default authSlice.reducer;
