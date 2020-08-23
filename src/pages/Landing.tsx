import React from "react";
import "./Landing.css";
import logo from "./logo.png";

interface Props {}

const LandingPage: React.FC<Props> = () => {
	return (
		<main className="Landing">
			<div className="background">
				<img src={logo} alt="error" className="logo" />
				<div className="titles">
					<h1>Benvenuti al Fermi!</h1>
					<h2>Istituto superiore “E. Fermi”</h2>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
