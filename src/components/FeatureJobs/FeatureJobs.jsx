import FeatureJobItems from "../FeatureJobItems/FeatureJobItems";
import { useEffect, useState } from "react";
import "./FeatureJobs.css";

function FeatureJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="container mx-auto px-16 my-16">
      <div className="text-center">
        <h1 className="text-5xl mb-5">Featured Jobs</h1>
        <p className="text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="flex gap-5 my-16">
        <div className="feature-item">
          {jobs.map((job) => (
            <FeatureJobItems key={job.id} job={job}></FeatureJobItems>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="bg-indigo-600 text-white font-semibold px-8 py-3">
          See All Jobs
        </button>
      </div>
    </div>
  );
}

export default FeatureJobs;
