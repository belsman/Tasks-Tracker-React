import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tasksSlice from '../features/task/tasksSlice';
import measurementsSlice from '../features/measurements/measurementsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksSlice,
    measurements: measurementsSlice,
  },
});
