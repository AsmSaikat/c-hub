import React from "react";

const Banner = () => {
	return (
		<div className="font-manrope mt-3 md:mt-1 mx-auto max-w-8xl lg:h-[450px] md:h-[400px] h-[670px] bg-[#F9F9FF]">
			<div className="lg:flex md:flex justify-between items-center lg:px-[200px] md:px-[70px] h-full ">
				<div>
					<img
						className="lg:hidden md:hidden mb-5 lg:mb-0 w-[490px]"
						src="/profile.png"
					/>
				</div>
				<div className="md:w-[40%] lg:w-[38%]">
					<h1 className="text-3xl text-center lg:text-left md:text-left lg:text-[80px] font-extrabold lg:leading-[80px] mb-5">
						One Step Closer To Your{" "}
						<span className="text-[#7E90FE]">Dream Job</span>
					</h1>
					<p className="w-3/4 md:w-full text-center lg:text-left md:text-left mx-auto lg:mx-0">
						Explore thousands of job opportunities with all the
						information you need. Its your future. Come find it.
						Manage all your job application from start to finish.
					</p>
					<div className="flex lg:block md:block justify-center items-center mx-auto">
						<a className="btn border-none bg-[#828DFF] text-white px-5 font-bold hover:text-slate-700 mt-5">
							Get Started!
						</a>
					</div>
				</div>
				<div>
					<img
						className="hidden lg:block md:block lg:w-[490px] md:w-[400px]"
						src="/profile.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
