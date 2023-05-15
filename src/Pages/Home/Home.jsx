import Banner from "../../components/Banner/Banner";
import JobCategoryList from "../../components/JobCategoryList/JobCategoryList";
import FeatureJobs from "../../components/FeatureJobs/FeatureJobs";
function Home() {
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeatureJobs></FeatureJobs>
    </div>
  );
}

export default Home;
