import React from 'react';
import Image from 'next/image';

const JobCard = ({ job: any }) => {
  return (
    <div className="opportunities flex flex-wrap w-[80%] mx-auto justify-center cursor-pointer">
      <div className="job-listing-container p-[24px_24px_24px_24px] gap-0 rounded-[30px] border-2 border-[#D6DDEB] bg-white shadow-lg flex justify-between my-5">
        <div className="job-list-content flex gap-6">
          <div>
            <Image
              src={job.image} // Assuming `job.image` contains the URL of the image
              alt="Company Logo"
              width={66}
              height={59}
              className="avatar w-[66px] h-[59px]"
            />
          </div>
          <div className="job-detail flex flex-col gap-2">
            <div className="job-title">
              <p className="font-epilogue text-[20px] font-semibold leading-[24px] text-[#25324B]">
                {job.title}
              </p>
            </div>
            <div className="job-company-detail flex flex-wrap gap-2">
              <div className="job-company">
                <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-[#7C8493]">
                  {job.company}
                </p>
              </div>
              <div className="job-location">
                <p className="font-epilogue text-[16px] font-normal leading-[25.6px] text-[#7C8493]">
                  {job.location}
                </p>
              </div>
            </div>
            <div className="job-description">
              <p className="font-epilogue text-base font-normal leading-[25.6px] text-[#25324B]">
                {job.description}
              </p>
            </div>
            <div className="job-tags flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-2.5 py-1.5 rounded-[80px] border text-sm font-semibold leading-[19.2px]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
