import React from "react";
import "./Landing.css";
import logo from "./logo.png";
import clickButton from "./clickButton.svg";

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

			<img className="clickButton" src={clickButton} alt="error" />
		</main>
	);
};

export default LandingPage;
