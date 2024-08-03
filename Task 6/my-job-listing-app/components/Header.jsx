import React from "react";

const Header = ({ count }) => {
  return (
    <div className="job-listing-page">
      <div className="header w-[80%] flex justify-between items-center mb-6 mx-auto">
        <div className="right-header flex flex-col gap-[8px]">
          <h1 className="text-[32px] font-[900] leading-[38.4px] text-[#25324B] font-poppins text-left">
            Opportunities
          </h1>
          <p className="font-epilogue text-[16px] font-[400] leading-[25.6px] text-[#7C8493] text-left">
            Showing {count} {count === 1 ? "result" : "results"}
          </p>
        </div>
        <div className="left-header">
          <div className="filter-bar flex items-center gap-4">
            <label htmlFor="filter" className="text-lg font-sm">
              Sorted by:
            </label>
            <select
              id="filter"
              className=" p-2 border border-gray-300 rounded-md"
            >
              <option value="">Most relevant</option>
              <option value="chronology">chronology</option>
              <option value="Alphabet">Alphabet</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
