import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="h-[100vh] flex flex-col justify-center items-center">
			<h1 className="text-2xl font-bold lg:text-6xl md:text-4xl lg:leading-[80px] ">
				Error <span className="text-red-500">404</span>
			</h1>
			<p className="text-center font-display text-2xl lg:text-[50px] lg:leading-[70px] font-bold lg:w-[80%] w-[300px] mb-4">
				Page not found!
			</p>
			<Link to="/">
				<button className="w-full text-base font-semibold btn flex justify-center items-center mx-auto gap-2 font-sans bg-[#E8E8E8] text-[#414040] mt-4">
					<p>Go Back</p>
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
