const jobDetailsData = (id) => {
  localStorage.setItem("job-details", id);
};

const addToAppliedJobs = (id) => {
  let appliedJobs = getAddedJobsFromDb();

  const addedJobsId = appliedJobs[id];
  if (addedJobsId) {
    appliedJobs[id] = addedJobsId;
  } else {
    appliedJobs[id] = id;
  }

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const getAddedJobsFromDb = () => {
  let appliedJobs = {};
  const storedJobs = localStorage.getItem("applied-jobs");
  if (storedJobs) {
    appliedJobs = JSON.parse(storedJobs);
  }
  return appliedJobs;
};

export { jobDetailsData, addToAppliedJobs, getAddedJobsFromDb };
