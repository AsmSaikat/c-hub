import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar";

const Root = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="min-h-[calc(100vh-298px)]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Root;
