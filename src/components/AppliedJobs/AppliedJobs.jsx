function AppliedJobs() {
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
        <div className="flex gap-10 border-2 rounded p-8">
          <div className="bg-slate-200 p-8 flex items-center">
            <img src="/src/assets/assets/Logo/google-1-1 1-1.png" />
          </div>
          <div className="flex-auto">
            <h1 className="text-lg font-semibold text-slate-800 mt-5 mb-1">
              Technical Database Engineer
            </h1>
            <p className="text-sm text-gray-400">Google LLC</p>
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
                <span>Dhaka, Bangladesh.</span>
              </span>
              <span className="flex items-center ml-2">
                <img
                  className="w-25 h-25 mr-1"
                  src="/src/assets/assets/Icons/Frame.png"
                />
                <span>Salary: 100k - 150k</span>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;
