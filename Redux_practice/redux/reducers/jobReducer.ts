import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../types';

interface JobState {
  jobs: any[];
  job: any; // Add job state for single job
  loading: boolean;
  error: string | null;
}

const initialState: JobState = {
  jobs: [],
  job: null, // Initialize job state
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    fetchJobsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess(state, action: PayloadAction<any[]>) {
      state.jobs = action.payload;
      state.loading = false;
    },
    fetchJobSuccess(state, action: PayloadAction<any>) {
      state.job = action.payload;
      state.loading = false;
    },
    fetchJobsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobSuccess, fetchJobsFailure } = jobSlice.actions;
export default jobSlice.reducer;
