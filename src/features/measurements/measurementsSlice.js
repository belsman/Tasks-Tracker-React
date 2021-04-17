import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../app/server';

const initialState = {
  measurements: [],
  status: 'idle',
  error: null,
};

export const fetchMeasurements = createAsyncThunk('measurements/fetchMeasurement', async (options)=> {
  const data = await client.get('/measurements', options);
  return data;
});

export const addNewMeasurement = (token, measuredData) => {
  return createAsyncThunk('measurements/addNewMeasurement', async ()=> {
    const data = await client.post('/measurements', token, measuredData);
    return data;
  });
}

const measurementsSlice = createSlice({
  name: 'measurements',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMeasurements.pending]: state => {
      state.status = 'loading'
    },
    [fetchMeasurements.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.measurements = state.measurements.concat(action.payload)
    },
    [fetchMeasurements.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [addNewMeasurement.fulfilled]: (state, action) => {
      state.measurements.push(action.payload);
    }
  }
});

export default measurementsSlice.reducer;

export const selectAllMeasurements = state => state.measurements.measurements;

export const selectMeasurementsById = (state, measurementId) => state.measurements.measurements.find( measured=> measured.id === measurementId);