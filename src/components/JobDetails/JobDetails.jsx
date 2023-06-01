// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToAppliedJobs, getAddedJobsFromDb } from "../../utilities/fakedb";
import "./jobDetails.css";

function JobDetails() {
  const [selectedJob, setSelectedJob] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [disable, setDisable] = useState(false);
  const data = useLoaderData();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    setSelectedJob(data);
  }, []);

  useEffect(() => {
    const appliedJobs = getAddedJobsFromDb();
    for (const id in appliedJobs) {
      jobs.forEach((job) => {
        if (job.id === parseInt(id)) {
          if (
            job.id === selectedJob.id &&
            job.isApplied === selectedJob.isApplied
          ) {
            setDisable(true);
          }
        }
      });
    }
  }, [selectedJob, jobs]);

  const handleAddToAppliedJobs = (id) => {
    console.log("clicked");
    addToAppliedJobs(id);
  };
  return (
    <div className="mx-auto pt-4 md:pb-10">
      <div className="bg-slate-100 py-16">
        <img
          className="absolute top-0 right-0 z-0 w-0 md:w-96"
          src="/assets/All Images/Vector-1.png"
          alt=""
        />
        <h1 className="text-2xl font-semibold text-center py-16 text-slate-800">
          Job Details
        </h1>
        <img
          className="absolute left-0 bottom-72 w-0 md:w-96"
          src="/assets/All Images/Vector.png"
          alt=""
        />
      </div>
      <div className="px-6 md:px-24">
      <div className="md:flex gap-10 mt-10">
        <div className="flex-8">
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
            <p className="text-sm mt-3">{selectedJob.experience}</p>
          </div>
        </div>
        <div className="flex-6">
          <div className="bg-slate-100 rounded p-8">
            <h3 className="font-bold text-slate-800 border-b-2 pb-2">
              Job Details
            </h3>
            <div className="flex items-center mt-3">
              <img className="w-6" src="/assets/Icons/Frame.png" />
              <span className="text-gray-600 text-sm font-semibold ps-2">
                Salary:
              </span>
              <span className="text-gray-400 text-sm ps-2">
                {selectedJob.salary} (per month)
              </span>
            </div>
            <div className="flex items-center mt-3">
              <img className="w-6" src="/assets/Icons/Frame-1.png" />
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
                  src="/assets/Icons/Frame-2.png"
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
                  src="/assets/Icons/Frame-3.png"
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
                  src="/assets/Icons/Frame-4.png"
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
          <div className="">
            <Link to="/applied-jobs">
              <button
                disabled={disable}
                className={disable ? "disabled-apply-btn" : "apply-btn"}
                title={disable ? "Already applied" : ""}
                onClick={() => handleAddToAppliedJobs(selectedJob.id)}
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default JobDetails;
