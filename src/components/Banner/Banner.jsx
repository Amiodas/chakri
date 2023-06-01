function Banner() {
  return (
    <div className="container md:flex mx-auto px-6 md:px-16 py-10 md:my-16">
      <div className="md:flex-auto">
        <span className="">
          <h1 className="text-4xl md:text-6xl font-bold">One Step</h1>
          <h1 className="text-4xl md:text-6xl font-bold my-2">Closer To Your</h1>
          <h1 className="text-4xl md:text-6xl text-indigo-600 font-bold">Dream Job</h1>
        </span>
        <p className="text-slate-600 pt-8">
          Explore thousands of job opportunities with all the information <br />
          you need. Its your future. Come find it. Manage all your job <br />
          application from start to finish.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700  p-3 mt-5 text-white">
          Get Started
        </button>
      </div>
      <div className="flex justify-end flex-auto">
        <img
          className="w-auto h-96"
          src="/assets/All Images/P3OLGJ1 copy 1.png"
        />
      </div>
    </div>
  );
}

export default Banner;
