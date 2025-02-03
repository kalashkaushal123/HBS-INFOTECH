// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/Login/authSlice'
import { authApi } from '../features/auth/Login/authApi'

const store = configureStore({
  reducer: {
    auth: authReducer, 
    [authApi.reducerPath]: authApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), 
});

export default store