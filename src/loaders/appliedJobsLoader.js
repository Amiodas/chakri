import { getAddedJobsFromDb } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
  const loadJobs = await fetch("/data.json");
  const jobs = await loadJobs.json();

  const selectedJobs = getAddedJobsFromDb();
  const appliedJobs = [];

  for (const id in selectedJobs) {
    const selectedAppliedJob = jobs.find((job) => job.id === parseInt(id));
    if (selectedAppliedJob) {
      selectedAppliedJob.isApplied = true;
      appliedJobs.push(selectedAppliedJob);
    }
  }

  return appliedJobs;
};

export default appliedJobsLoader;
