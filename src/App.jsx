import "./App.css";
import Banner from "./components/Banner/Banner";
import FeatureJobs from "./components/FeatureJobs/FeatureJobs";
import Header from "./components/Header/Header";
import JobCategoryList from "./components/JobCategoryList/JobCategoryList";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Header></Header>
        <Banner></Banner>
        <JobCategoryList></JobCategoryList>
        <FeatureJobs></FeatureJobs>
      </div>
    </>
  );
}

export default App;
