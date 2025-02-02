// src/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = 'succeeded';
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = 'idle';
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
