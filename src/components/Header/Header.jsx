import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="">
      <div className="container mx-auto px-16 flex justify-between items-center py-4">
        <h1 className="text-3xl text-indigo-700 font-bold">
          <Link to="/">Career Hub</Link>
        </h1>
        <ul className="flex gap-5">
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/applied-jobs">Applied Jobs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
        <button className="bg-indigo-600 p-3 text-white hover:rounded">
          Start Applying
        </button>
      </div>
    </div>
  );
}

export default Header;
