// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToAppliedJobs } from "../../utilities/fakedb";

function JobDetails() {
  const data = useLoaderData();
  const [selectedJob, setSelectedJob] = useState([]);

  useEffect(() => {
    setSelectedJob(data);
  }, []);

  const handleAddToAppliedJobs = (id) => {
    addToAppliedJobs(id);
  };
  return (
    <div className="container mx-auto px-16 pt-4 pb-10">
      <div className="bg-slate-100 py-16 rounded-lg">
        <h1 className="text-2xl font-semibold text-center py-16 text-slate-800">
          Job Details
        </h1>
      </div>
      <div className="flex gap-10 mt-10">
        <div className="flex-6">
          <div className="mb-6">
            <span className="font-bold text-slate-800">Job Description:</span>
            <p className="text-sm mt-3">{selectedJob.jobDescription}</p>
          </div>
          <div className="mb-6">
            <span className="font-bold text-slate-800">
              Job Responsibilities:
            </span>
            <p className="text-sm mt-3">{selectedJob.jobResponsibility}</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">
              Educational Requirements:
            </h3>

            {selectedJob?.educationalRequirements?.map((eduRequ, index) => (
              <p key={index} className="text-sm mt-3">
                {eduRequ}
              </p>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">Experiences:</h3>
            <p className="text-sm mt-3">{selectedJob.experiences}</p>
          </div>
        </div>
        <div className="flex-6">
          <div className="bg-slate-100 rounded p-8">
            <h3 className="font-bold text-slate-800 border-b-2 pb-2">
              Job Details
            </h3>
            <div className="flex items-center mt-3">
              <img className="w-6" src="/src/assets/assets/Icons/Frame.png" />
              <span className="text-gray-600 text-sm font-semibold ps-2">
                Salary:
              </span>
              <span className="text-gray-400 text-sm ps-2">
                {selectedJob.salary} (per month)
              </span>
            </div>
            <div className="flex items-center mt-3">
              <img className="w-6" src="/src/assets/assets/Icons/Frame-1.png" />
              <span className="text-gray-600 text-sm font-semibold ps-2">
                Job Title:
              </span>
              <span className="text-gray-400 text-sm ps-2">
                {selectedJob.position}
              </span>
            </div>
            <div className="mt-5">
              <h3 className="font-bold text-slate-800 border-b-2 pb-2">
                Contact Information
              </h3>
              <div className="flex items-center mt-3">
                <img
                  className="w-5"
                  src="/src/assets/assets/Icons/Frame-2.png"
                />
                <span className="text-gray-600 text-sm font-semibold ps-2">
                  Phone:
                </span>
                <span className="text-gray-400 text-sm ps-2">
                  {selectedJob.phone}
                </span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="w-5"
                  src="/src/assets/assets/Icons/Frame-3.png"
                />
                <span className="text-gray-600 text-sm font-semibold ps-2">
                  Email:
                </span>
                <span className="text-gray-400 text-sm ps-2">
                  {selectedJob.email}
                </span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="w-5"
                  src="/src/assets/assets/Icons/Frame-4.png"
                />
                <span className="text-gray-600 text-sm font-semibold ps-2">
                  Address:
                  <span className="text-gray-400 text-sm ps-2">
                    {selectedJob.location}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/applied-jobs">
            <button
              onClick={() => handleAddToAppliedJobs(selectedJob.id)}
              className="block bg-indigo-600 py-3 mt-8 px-4 text-white font-semibold rounded w-80"
            >
              Apply Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
