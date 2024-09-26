import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Jobs from "./components/Jobs";
import AppliedJobs from "./components/AppliedJobs";
import Blogs from "./components/Blogs";
import Statistics from "./components/Statistics";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/jobs",
				element: <Jobs></Jobs>,
			},
			{
				path: "/applied",
				element: <AppliedJobs></AppliedJobs>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/statistics",
				element: <Statistics></Statistics>,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
