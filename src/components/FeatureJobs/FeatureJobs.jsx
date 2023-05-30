import FeatureJobItems from "../FeatureJobItems/FeatureJobItems";
import { useEffect, useState } from "react";
import "./FeatureJobs.css";

function FeatureJobs() {
  const [jobs, setJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const data = jobs.slice(0, 4);
    setDisplayJobs(data);
  }, [jobs]);

  const handleShowAllData = () => {
    setLoading(true);
    const data = jobs.slice(0, jobs.length);
    setDisplayJobs(data);
    setLoading(false);
  };
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
          {displayJobs.map((job) => (
            <FeatureJobItems key={job.id} job={job}></FeatureJobItems>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleShowAllData}
          className="bg-indigo-600 text-white font-semibold px-8 py-3"
        >
          {loading  ? "Loading..." : "See All Jobs"}
        </button>
      </div>
    </div>
  );
}

export default FeatureJobs;
