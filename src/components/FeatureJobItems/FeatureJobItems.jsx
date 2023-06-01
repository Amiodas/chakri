import { Link } from "react-router-dom";
import {jobDetailsData} from "../../utilities/fakedb";

function FeatureJobItems({ job }) {
  const { id, position, companyName, image, jobTypes, location, salary } = job;

  const handleJobDetails = (id) => {
    jobDetailsData(id);
  };
  return (
    <div>
      <div style={{height: "100%"}} className="border-2 rounded p-8 mb-8">
        <img width="120px" height="120px" src={image} />
        <h1 className="text-lg font-semibold mt-5 mb-1">{position}</h1>
        <p className="text-sm text-slate-400">{companyName}</p>
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
              src="/assets/Icons/Frame-4.png"
            />
            {location}
          </span>
          <span className="flex items-center ml-2">
            <img
              className="w-25 h-25 mr-1"
              src="/assets/Icons/Frame.png"
            />
            Salary: {salary}
          </span>
        </div>
        <div>
          <Link to={`/job-details/${id}`}>
            <button
              onClick={() => handleJobDetails(id)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureJobItems;
