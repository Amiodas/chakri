const jobDetailsData = (id) => {
  localStorage.setItem("job-details", id);
  console.log(id);
};

const addToAppliedJobs = (id) => {
    console.log(id)
};

export { jobDetailsData, addToAppliedJobs };
