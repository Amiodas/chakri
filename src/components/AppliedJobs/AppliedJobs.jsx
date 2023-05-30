import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

function AppliedJobs() {
  const appliedJobs = useLoaderData();
  console.log(appliedJobs);
  return (
    <div className="container mx-auto px-16 pt-4 pb-10">
      <div className="bg-slate-100 py-16 rounded-lg">
        <h1 className="text-2xl font-semibold text-slate-800 text-center py-16">
          Applied jobs
        </h1>
      </div>
      <div className="my-10">
        <div className="text-right mb-5">
          <button className="px-6 py-2 bg-slate-100 border-2 rounded text-xs font-semibold text-slate-400">
            Filter By
          </button>
        </div>
        {
          appliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job} />
          ))
        }
      </div>
    </div>
  );
}

export default AppliedJobs;
