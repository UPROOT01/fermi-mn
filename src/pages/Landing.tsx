import React from "react";
import "./Landing.css";
import logo from "../assets/logo.png";
import clickButton from "../assets/clickButton.svg";
import { RouteComponentProps } from "react-router-dom";
import { setTimeout } from "timers";

interface Props extends RouteComponentProps {}

const LandingPage: React.FC<Props> = ({ history }) => {
	setTimeout(() => {
		history.replace("/home");
	}, 2000);

	return (
		<main
			className="Landing"
			onClick={() => {
				history.replace("/home");
			}}
		>
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
