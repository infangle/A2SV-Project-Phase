import React, {useState, useEffect} from 'react';
import JobCard from '../components/JobCard';
import jobsData from '../jobs.json';


const IndexPage = () => {
    return (
        <div>
        {jobsData.map((job, index) =>(
            <JobCard key={index} job={job}/>
        ))}
        </div>
    )
}