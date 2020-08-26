import React from "react";
import "./Loading.css";

interface Props {}

const LoadingPage: React.FC<Props> = () => {
	console.log("rendered");

	return (
		<main className="loadingPage">
			<div className="loader">Loading...</div>
		</main>
	);
};
export default LoadingPage;
