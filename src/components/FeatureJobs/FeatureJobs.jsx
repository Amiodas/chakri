function FeatureJobs() {
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
        <div className="flex-auto">
          <div className="border-2 rounded p-8">
            <img src="/src/assets/assets/Logo/google-1-1 1-1.png" />
            <h1 className="text-lg font-semibold mt-5 mb-1">
              Technical Database Engineer
            </h1>
            <p className="text-sm text-slate-400">Google LLC</p>
            <div className="mt-4">
              <span className="border-2 py-1 px-3 text-xs font-bold rounded text-indigo-600 border-indigo-600 mr-2">
                Remote
              </span>
              <span className="border-2 py-1 px-3 text-xs font-bold rounded text-indigo-600 border-indigo-600">
                Full Time
              </span>
            </div>
            <div className="flex text-sm my-5">
              <span className="flex items-center">
                <img
                  className="w-25 h-25 mr-1"
                  src="/src/assets/assets/Icons/Frame-4.png"
                />
                Dhaka, Bangladesh.
              </span>
              <span className="flex items-center ml-2">
                <img
                  className="w-25 h-25 mr-1"
                  src="/src/assets/assets/Icons/Frame.png"
                />
                Salary: 100k - 150k
              </span>
            </div>
            <div>
              <button className="bg-indigo-600 text-white px-4 py-2">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="border-2 rounded p-8">
            <img src="/src/assets/assets/Logo/google-1-1 1-1.png" />
            <h1 className="text-lg font-semibold mt-5 mb-1">
              Technical Database Engineer
            </h1>
            <p className="text-sm text-slate-400">Google LLC</p>
            <div className="mt-4">
              <span className="border-2 py-1 px-3 text-xs font-bold rounded text-indigo-600 border-indigo-600 mr-2">
                Remote
              </span>
              <span className="border-2 py-1 px-3 text-xs font-bold rounded text-indigo-600 border-indigo-600">
                Full Time
              </span>
            </div>
            <div className="flex text-sm my-5">
              <span className="flex items-center">
                <img
                  className="w-25 h-25 mr-1"
                  src="/src/assets/assets/Icons/Frame-4.png"
                />
                Dhaka, Bangladesh.
              </span>
              <span className="flex items-center ml-2">
                <img
                  className="w-25 h-25 mr-1"
                  src="/src/assets/assets/Icons/Frame.png"
                />
                Salary: 100k - 150k
              </span>
            </div>
            <div>
              <button className="bg-indigo-600 text-white px-4 py-2">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-indigo-600 text-white font-semibold px-8 py-3">See All Jobs</button>
      </div>
    </div>
  );
}

export default FeatureJobs;
