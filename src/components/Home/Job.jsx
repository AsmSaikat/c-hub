import React from "react";

const Job = ({ job }) => {
	console.log(job);

	return (
		<div>
			<div>
				<div>
					<div className="w-[380px] lg:mx-0 lg:w-[500px] h-[320px] bg-slate-100 rounded-3xl shadow-2xl font-manrope mx-auto">
						<div className="pl-10 lg:pt-8 pt-4">
							<div>
								<img src={job.logo} alt="" />
							</div>
							<div>
								<h1 className="font-extrabold text-xl mt-3">
									{job.job_title}
								</h1>
								<p className="font-medium">
									{job.company_name}
								</p>
							</div>
							<div className="flex gap-3 my-3">
								<div className="border-2 border-[#828DFF] text-[#828DFF] py-1 rounded-md w-[70px] flex items-center justify-center">
									<h1>{job.remote_or_onsite}</h1>
								</div>
								<div className="border-2 border-[#828DFF] text-[#828DFF] py-1 rounded-md w-[80px] flex items-center justify-center">
									<h1>{job.job_type}</h1>
								</div>
							</div>
							<div className="flex lg:flex-row flex-col lg:gap-3">
								<div className="flex gap-2">
									<img src="/address.png" alt="" />
									<p>{job.location}</p>
								</div>
								<div className="flex gap-2">
									<img src="/salary.png" alt="" />
									<p>{job.salary}</p>
								</div>
							</div>
							<div className="">
								<a className="btn border-none bg-[#828DFF] text-white px-5 font-bold hover:text-slate-700 mt-5">
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Job;
