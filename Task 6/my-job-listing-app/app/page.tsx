// app/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import Header from "../components/Header";

const IndexPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data.job_postings);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Header count={jobs.length} />
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default IndexPage;
