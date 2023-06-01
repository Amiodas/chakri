import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import { useEffect, useState } from "react";

function AppliedJobs() {
  const loadJobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    setAppliedJobs(loadJobs);
  }, []);

  const handleFilterRemoteJobs = () => {
    const filterData = loadJobs.filter((item) =>
      item.jobTypes.includes("Remote")
    );
    setAppliedJobs(filterData);
  };

  const handleFilterOnsiteJobs = () => {
    const filterData = loadJobs.filter((item) =>
      item.jobTypes.includes("Onsite")
    );
    setAppliedJobs(filterData);
  };
  return (
    <div className="mx-auto pt-4 md:pb-10">
      <div className="bg-slate-100 py-16">
        <img
          className="absolute top-0 right-0 z-0 w-0 md:w-96"
          src="/src/assets/assets/All Images/Vector-1.png"
          alt=""
        />
        <h1 className="text-2xl font-semibold text-slate-800 text-center py-16">
          Applied jobs
        </h1>
        <img
          className="absolute left-0 bottom-72 w-0 md:w-96"
          src="/src/assets/assets/All Images/Vector.png"
          alt=""
        />
      </div>
<div className="px-6 md:px-24">
  
{loadJobs?.length === 0 ? (
        <p className="my-10 text-center">No Applied jobs yet.</p>
      ) : (
        <div className="my-10">
          <div className="text-right mb-5">
            <button
              onClick={handleFilterRemoteJobs}
              className="px-6 py-2 bg-slate-100 border-2 rounded text-xs font-semibold text-slate-400"
            >
              Remote Job
            </button>
            <button
              onClick={handleFilterOnsiteJobs}
              className="ml-3 px-6 py-2 bg-slate-100 border-2 rounded text-xs font-semibold text-slate-400"
            >
              Onsite Job
            </button>
          </div>
          <div>
            {appliedJobs.length === 0 ? (
              <p className="text-center mt-10">No Data matched.</p>
            ) : (
              ""
            )}
          </div>
          {appliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))}
        </div>
      )}
</div>
    </div>
  );
}

export default AppliedJobs;
