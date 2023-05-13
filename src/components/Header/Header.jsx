function Header() {
  return (
    <div className="border-2">
      <div className="container mx-auto px-16 flex justify-between items-center py-4">
        <h1 className="text-3xl text-indigo-700 font-bold">Career Hub</h1>
        <ul className="flex gap-5">
          <li>Statistics</li>
          <li>Applied Jobs</li>
          <li>Blog</li>
        </ul>
        <button className="bg-indigo-600 p-3 text-white hover:rounded">
          Start Applying
        </button>
      </div>
    </div>
  );
}

export default Header;
