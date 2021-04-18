import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../app/server';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async options => {
  const { token } = options;
  const response = await client.get('/tasks', token);
  const data = await response.json();
  return data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTasks.pending]: state => {
      state.status = 'loading'
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.tasks = state.tasks.concat(action.payload)
    },
    [fetchTasks.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export default tasksSlice.reducer;
