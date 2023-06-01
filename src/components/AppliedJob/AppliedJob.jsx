import React from "react";
import { jobDetailsData } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const { id, image, position, companyName, location, salary, jobTypes } = job;

  const handleViewDetails = (id) => {
    jobDetailsData(id);
  };
  return (
    <div>
      <div className="md:flex gap-10 border-2 rounded p-8 mb-6">
        <div className="bg-slate-200 p-8 flex items-center">
          <img width="120px" src={image} />
        </div>
        <div className="flex-auto">
          <h1 className="text-lg font-semibold text-slate-800 mt-5 mb-1">
            {position}
          </h1>
          <p className="text-sm text-gray-400">{companyName}</p>
          <div className="mt-4">
            {jobTypes?.map((jobType, index) => (
              <span
                key={index}
                className="border-2 py-1 px-3 text-xs font-bold rounded text-indigo-600 border-indigo-600 mr-2"
              >
                {jobType}
              </span>
            ))}
          </div>
          <div className="flex text-sm my-5">
            <span className="flex items-center">
              <img
                className="w-25 h-25 mr-1"
                src="/src/assets/assets/Icons/Frame-4.png"
              />
              <span>{location}</span>
            </span>
            <span className="flex items-center ml-2">
              <img
                className="w-25 h-25 mr-1"
                src="/src/assets/assets/Icons/Frame.png"
              />
              <span>Salary: {salary}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <Link to={`/job-details/${id}`}>
            <button
              onClick={() => handleViewDetails(id)}
              className="bg-indigo-600 text-white px-4 py-2"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
