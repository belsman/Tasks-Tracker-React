import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tasksSlice from '../features/task/tasksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksSlice,
  },
});
