import { Dispatch } from 'redux';
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } from '../reducers/jobReducer';

export const fetchJobs = () => async (dispatch: Dispatch) => {
  dispatch(fetchJobsRequest());
  try {
    const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(fetchJobsSuccess(data));
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};

export const fetchJobById = (id: string) => async (dispatch: Dispatch) => {
  dispatch(fetchJobsRequest());
  try {
    const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(fetchJobsSuccess([data])); // Adjust if necessary to handle single job object
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};
