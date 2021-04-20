import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../app/server';

const initialState = {
  measurements: [],
  status: 'idle',
  error: null,
};

export const fetchMeasurements = createAsyncThunk('measurements/fetchMeasurement', async options => {
  const { token } = options;
  const response = await client.get('/measurements', token);
  const data = await response.json();
  return data;
});

export const addNewMeasurement = createAsyncThunk('measurements/addNewMeasurement', async options => {
  const { token, formData } = options;
  const response = await client.post('/measurements', token, formData);
  const data = await response.json();
  return data;
});

const measurementsSlice = createSlice({
  name: 'measurements',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMeasurements.pending]: state => {
      state.status = 'loading';
    },
    [fetchMeasurements.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.measurements = state.measurements.concat(action.payload);
    },
    [fetchMeasurements.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewMeasurement.fulfilled]: (state, action) => {
      state.measurements.push(action.payload);
    },
  },
});

export default measurementsSlice.reducer;

export const selectAllMeasurements = state => state.measurements.measurements;

export const selectMeasurementsById = (state, measurementId) => state.measurements.measurements.find(measured => String(measured.id) === measurementId);
