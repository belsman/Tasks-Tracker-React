import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  authToken: null,
  status: 'idle',
};

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async signupData => {
    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:9000/signup',
      data: signupData,
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.data;
    return data.auth_token;
  },
);

export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async loginData => {
    const response = await axios({
      method: 'post',
      url: 'http://127.0.0.1:9000/auth/login',
      data: loginData,
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.data;
    return data.auth_token;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  /* eslint-disable no-param-reassign */
  reducers: {
    logout: state => {
      state.authToken = null;
      state.status = 'idle';
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authToken = action.payload;
      })
      .addCase(loginUserAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authToken = action.payload;
      });
  }, /* eslint-enable no-param-reassign */
});

export const { logout } = authSlice.actions;

export const isUserLogged = state => Boolean(state.auth.authToken);

export default authSlice.reducer;
