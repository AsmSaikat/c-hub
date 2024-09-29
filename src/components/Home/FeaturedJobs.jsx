import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		fetch("jobs.json")
			.then((res) => res.json())
			.then((data) => setJobs(data));
	}, []);

	return (
		<div className="mb-20">
			<h1 className="text-4xl lg:text-5xl font-bold text-center">
				Featured Jobs
			</h1>
			<p className="text-center my-5 font-manrope">
				Explore thousands of job opportunities with the information you
				need. It's your future! So jump in right now!
			</p>
			<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto lg:w-[1200px] lg:pl-16 gap-y-10 lg:gap-y-10 md:gap-y-5">
				{jobs.map((job) => (
					<Job key={job.id} job={job}></Job>
				))}
			</div>
			<div className="text-center mt-10">
				<a className="btn border-none bg-[#828DFF] text-white px-10 font-bold hover:text-slate-700 mt-5">
					View All Jobs
				</a>
			</div>
		</div>
	);
};

export default FeaturedJobs;
