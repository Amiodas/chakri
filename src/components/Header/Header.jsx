import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
function Header() {
  return (
    <div className="">
      <div className="container mx-auto px-16 flex justify-between items-center py-4">
        <h1 className="text-3xl text-indigo-700 font-bold">
          <Link to="/">Career Hub</Link>
        </h1>
        <ul className="flex gap-5">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>
        <button className="bg-indigo-600 p-3 text-white">Start Applying</button>
      </div>
    </div>
  );
}

export default Header;
