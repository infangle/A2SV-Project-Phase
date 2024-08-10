import React from 'react'
import { useState, useEffect } from 'react';
import JobListingCard from '../components/jobListingCard';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);


useEffect(() =>{
  fetch("https://drive.google.com/file/d/1QAObCWl5f0Ytc3bUHRREdNVBd4P-dO07/view?pli=1")
  .then(response =>response.json())
  .then(data => setJobs(data));
}, []);

return (
  <div className='job-listing'>
    {jobs.map(job =>(
      <JobListingCard key={job.title} job={job} />
    ))}
  </div>
);

};


export default JobListing;