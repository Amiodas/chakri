import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
function Header() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="">
      <div className="container md:top-0 md:flex justify-between items-center mx-auto px-6 md:px-16 py-2 md:py-4">
        <h1 className="text-3xl text-indigo-700 font-bold">
          <Link to="/">Chakri</Link>
        </h1>
        <ul className="md:flex md:gap-5 my-5 md:my-0">
          <li className="my-3 md:my-0">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="my-3 md:my-0">
            <ActiveLink to="/statistics">Statistics</ActiveLink>
          </li>
          <li className="my-3 md:my-0">
            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
          </li>
          <li className="my-3 md:my-0">
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>

        <Link to="/">
          <button
            onClick={() => scrollToElement("featureJobs")}
            className="bg-indigo-600 hover:bg-indigo-700 p-3 text-white"
          >
            Start Applying
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
