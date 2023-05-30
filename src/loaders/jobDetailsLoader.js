const jobDetailsLoader = async () => {
  const loadJobs = await fetch("/data.json");
  const jobs = await loadJobs.json();

  const selectedJobDetails = localStorage.getItem("job-details");

  const selectedJobDetailsData = jobs.find(
    (job) => job.id === parseInt(selectedJobDetails)
  );

  return selectedJobDetailsData;
};

export default jobDetailsLoader;
