"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById } from '../../../redux/actions/jobActions'; // Adjust the path if necessary
import { useRouter } from 'next/navigation';

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the job ID from the URL
  const dispatch = useDispatch();
  const { job, loading, error } = useSelector((state: any) => state.job); // Adjust the state selector if needed

  useEffect(() => {
    if (id) {
      dispatch(fetchJobById(id as string));
    }
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <div>{job.tags.join(', ')}</div>
    </div>
  );
};

export default JobDetail;
