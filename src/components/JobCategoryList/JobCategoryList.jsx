function JobCategoryList() {
  return (
    <div className="container mx-auto px-5 my-10">
      <div className="text-center">
        <h1 className="text-5xl mb-5">Job Category List</h1>
        <p className="text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex py-10 my-10">
        <div className="flex-auto">
          <div>
            <img
              className="w-25 h-25 bg-slate-200 p-2 rounded mb-5"
              src="/src/assets/assets/Icons/accounts 1.png"
            />
          </div>
          <h1 className="text-xl font-bold">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
        <div className="flex-auto">
          <div>
            <img
              className="w-25 h-25 bg-slate-200 p-2 rounded mb-5"
              src="/src/assets/assets/Icons/business 1.png"
            />
          </div>
          <h1 className="text-xl font-bold">Creative Design</h1>
          <p>100+ Jobs Available</p>
        </div>
        <div className="flex-auto">
          <div>
            <img
              className="w-25 h-25 bg-slate-200 p-2 rounded mb-5"
              src="/src/assets/assets/Icons/social-media 1.png"
            />
          </div>
          <h1 className="text-xl font-bold">Marketing & Sales</h1>
          <p>150 Jobs Available</p>
        </div>
        <div className="flex-auto">
          <div>
            <img
              className="w-25 h-25 bg-slate-200 p-2 rounded mb-5"
              src="/src/assets/assets/Icons/chip 1.png"
            />
          </div>
          <h1 className="text-xl font-bold">Engineering Job</h1>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
}

export default JobCategoryList;
