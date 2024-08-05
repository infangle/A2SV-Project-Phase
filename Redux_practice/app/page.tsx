// app/page.tsx
"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';
import JobList from '../components/JobList';
import Header from '../components/Header';

const Home = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state: any) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header count={jobs.length} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
