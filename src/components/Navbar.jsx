import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 font-manrope">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/jobs">Jobs</NavLink>
						<NavLink to="/statistics">Statistics</NavLink>
						<NavLink to="/applied">Applied Jobs</NavLink>
						<NavLink to="/blogs">Blogs</NavLink>
					</ul>
				</div>
				<a className="btn btn-ghost text-3xl font-manrope font-extrabold">
					Career<span className="text-[#828DFF]">Hub</span>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu flex items-center menu-horizontal space-x-2 px-1 font-bold">
					{" "}
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-[#828DFF] px-5 py-3 rounded-lg border-2 border-[#828DFF]"
								: "hover: px-5 hover:py-3 hover:border-2 hover:rounded-lg hover:bg-[#D2D4D7] hover:font-semibold"
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "px-5 py-3 border-2 border-[#828DFF] text-[#828DFF] rounded-lg"
								: "hover: px-5 hover:py-3 hover:border-2 hover:rounded-lg hover:bg-[#D2D4D7] hover:font-semibold"
						}
						to="/jobs"
					>
						Jobs
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "px-5 py-3 border-2 border-[#828DFF] text-[#828DFF] rounded-lg"
								: "hover: px-5 hover:py-3 hover:border-2 hover:rounded-lg hover:bg-[#D2D4D7] hover:font-semibold"
						}
						to="/statistics"
					>
						Statistics
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "px-5 py-3 border-2 border-[#828DFF] text-[#828DFF] rounded-lg"
								: "hover: px-5 hover:py-3 hover:border-2 hover:rounded-lg hover:bg-[#D2D4D7] hover:font-semibold"
						}
						to="/applied"
					>
						Applied Jobs
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "px-5 py-3 border-2 border-[#828DFF] text-[#828DFF] rounded-lg"
								: "hover: px-5 hover:py-3 hover:border-2 hover:rounded-lg hover:bg-[#D2D4D7] hover:font-semibold"
						}
						to="/blogs"
					>
						Blogs
					</NavLink>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn border-none bg-[#828DFF] text-white px-5 font-bold hover:text-slate-700">
					Apply Now!
				</a>
			</div>
		</div>
	);
};

export default Navbar;
