const jobDetailsLoader = async () => {
  const loadedJobs = await fetch("/data.json");
  const jobs = await loadedJobs.json();

  const selectedJobDetails = localStorage.getItem("job-details");

  const selectedJobDetailsData = jobs.find(
    (job) => job.id === parseInt(selectedJobDetails)
  );

  return selectedJobDetailsData;
};

export default jobDetailsLoader;
