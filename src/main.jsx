import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Blog from "./components/Blog/Blog.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import jobDetailsLoader from "./loaders/jobDetailsLoader.js";
import appliedJobsLoader from "./loaders/appliedJobsLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/job-details/:jobId",
        element: <JobDetails />,
        loader: jobDetailsLoader,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: appliedJobsLoader
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
