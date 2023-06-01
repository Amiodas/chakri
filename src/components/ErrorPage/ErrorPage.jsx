import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page" className="text-center my-16">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-xl mt-8 mb-7">Sorry, an unexpected error has occurred.</p>
      <Link to="/" className="bg-indigo-600 text-white rounded px-5 py-3">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;
