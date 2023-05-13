function Banner() {
  return (
    <div className="container mx-auto px-5 flex py-10">
      <div className="flex-auto">
        <h1 className="text-6xl font-bold">
          One Step <br /> Closer To Your <br />
          <span className="text-indigo-600">Dream Job</span>
        </h1>
        <p className="text-slate-600 pt-8">
          Explore thousands of job opportunities with all the information <br />{" "}
          you need. Its your future. Come find it. Manage all your job <br />{" "}
          application from start to finish.
        </p>
        <button className="bg-indigo-600 p-3 mt-5 text-white hover:rounded">
          Get Started
        </button>
      </div>
      <div className="flex justify-end flex-auto">
        <img
          className="w-auto h-96"
          src="/src/assets/assets/All Images/P3OLGJ1 copy 1.png"
        />
      </div>
    </div>
  );
}

export default Banner;
