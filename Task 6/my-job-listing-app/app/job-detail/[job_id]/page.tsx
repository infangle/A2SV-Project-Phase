"use client";
import React, { useState, useEffect } from "react";
import LeftSection from "@/components/[index]/left-job-details";
import RightSection from "@/components/[index]/right-job-detail";

interface Job {
  title: string;
  responsibilities: string;
  ideal_candidate: string;
  when_where: string;
}

const JobDetailPage: React.FC = () => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch("/jobs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.job_postings.length > 0) {
          setJob(data.job_postings[0]); // Set only the first job
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJob();
  }, []);

  return (
    <div className="job-detail flex p-8">
      <div className="left-section w-[80%] p-2">
        {job ? <LeftSection job={job} /> : <p>Loading job details...</p>}
      </div>
      <div className="left-section w-[20%]">
        {job ? <RightSection job={job} /> : <p>Loading job details...</p>}
      </div>
    </div>
  );
};

export default JobDetailPage;
