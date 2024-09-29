import React from "react";

const Category = () => {
	return (
		<div>
			<div className="w-[311px] h-[243px] flex flex-col justify-center mx-auto pl-10 rounded-2xl bg-[#F9F8FF]">
				<div className="bg-[#EEEDFF] h-16 pt-1 rounded-md w-16 flex justify-center items-center">
					<img
						className="w-[50px]"
						src="/account finance.png"
						alt=""
					/>
				</div>
				<h3 className="text-xl font-bold mt-5">Account & Finance</h3>
				<p>300 Jobs Available</p>
			</div>
			<div className="w-[311px] h-[243px] flex flex-col justify-center mx-auto  pl-10 rounded-2xl bg-[#F9F8FF]">
				<div className="bg-[#EEEDFF] h-16 pt-1 rounded-md w-16 flex justify-center items-center">
					<img
						className="w-[50px]"
						src="/creative design.png"
						alt=""
					/>
				</div>
				<h3 className="text-xl font-bold mt-5">Creative Designs</h3>
				<p>100+ Jobs Available</p>
			</div>
			<div className="w-[311px] h-[243px] flex flex-col justify-center mx-auto pl-10 rounded-2xl bg-[#F9F8FF]">
				<div className="bg-[#EEEDFF] h-16 pt-1 rounded-md w-16 flex justify-center items-center">
					<img
						className="w-[50px]"
						src="/marketing sales.png"
						alt=""
					/>
				</div>
				<h3 className=" text-xl font-bold mt-5">Marketing Sales</h3>
				<p>150 Jobs Available</p>
			</div>
			<div className="w-[311px] h-[243px] flex flex-col justify-center mx-auto  pl-10 rounded-2xl bg-[#F9F8FF]">
				<div className="bg-[#EEEDFF] h-16 pt-1 rounded-md w-16 flex justify-center items-center">
					<img
						className="w-[50px]"
						src="/engineering job.png"
						alt=""
					/>
				</div>
				<h3 className="text-xl font-bold mt-5">Engineering Job</h3>
				<p>224 Jobs Available</p>
			</div>
		</div>
	);
};

export default Category;
