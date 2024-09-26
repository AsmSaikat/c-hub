import React from "react";

const Banner = () => {
	return (
		<div className="font-manrope mt-3 mx-auto max-w-8xl h-[450px] bg-[#F9F9FF]">
			<div className="flex">
				<div className="w-[38%] pl-28">
					<h1 className="text-[80px] font-extrabold leading-[80px] mb-5">
						One Step Closer To Your{" "}
						<span className="text-[#7E90FE]">Dream Job</span>
					</h1>
					<p className="w-3/4">
						Explore thousands of job opportunities with all the
						information you need. Its your future. Come find it.
						Manage all your job application from start to finish.
					</p>
					<a className="btn border-none bg-[#828DFF] text-white px-5 font-bold hover:text-slate-700 mt-5">
						Get Started!
					</a>
				</div>
				<div>
					<h1></h1>
					<img
						className="flex justify-center items-center mx-auto w-[55%]"
						src="/profile.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
