function JobDetails() {
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
            <p className="text-sm mt-3">
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
          </div>
          <div className="mb-6">
            <span className="font-bold text-slate-800">
              Job Responsibilities:
            </span>
            <p className="text-sm mt-3">
              A UI/UX (User Interface/User Experience) designer is responsible
              for designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">
              Educational Requirements:
            </h3>
            <p className="text-sm mt-3">
              Bachelor degree to complete any reputational university.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">Experiences:</h3>
            <p className="text-sm mt-3">2-3 Years in this field.</p>
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
                100k - 150k (per month)
              </span>
            </div>
            <div className="flex items-center mt-3">
              <img className="w-6" src="/src/assets/assets/Icons/Frame-1.png" />
              <span className="text-gray-600 text-sm font-semibold ps-2">
                Job Title:
              </span>
              <span className="text-gray-400 text-sm ps-2">Job title</span>
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
                  01750-00 00 00
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
                  info@gmail.com
                </span>
              </div>
              <div className="flex items-center mt-3">
                <img
                  className="w-5"
                  src="/src/assets/assets/Icons/Frame-4.png"
                />
                <span className="text-gray-600 text-sm font-semibold ps-2">
                  Address:{" "}
                  <span className="text-gray-400 text-sm ps-2">
                    Dhanmondi 32, Sukrabad Dhaka, Bangladesh
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="block bg-indigo-600 py-3 mt-8 px-4 text-white font-semibold rounded w-80">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
