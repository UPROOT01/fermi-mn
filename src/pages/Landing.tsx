import React, { useEffect, useState, useRef } from "react";
import "./Landing.css";
import logo from "../assets/logo.png";
import clickButton from "../assets/clickButton.svg";
import { RouteComponentProps } from "react-router-dom";
import { setTimeout } from "timers";

interface Props extends RouteComponentProps {}

const LandingPage: React.FC<Props> = ({ history }) => {
	const [scrollY, setScrollY] = useState(0);
	const main = useRef<HTMLElement>(null);
	// const [mainHeight, setMainHeight] = useState(0);

	useEffect(() => {
		const scrollAnimation = () => {
			if (window.scrollY <= main.current!.clientHeight) {
				setScrollY(window.scrollY);
			}
		};
		window.addEventListener("scroll", scrollAnimation);

		// setMainHeight(main.current!.clientHeight);

		return () => {
			window.removeEventListener("scroll", scrollAnimation);
		};
	}, []);

	return (
		<main
			className="Landing"
			onClick={() => {
				window.scrollTo({
					top: main.current!.clientHeight,
					behavior: "smooth",
				});
			}}
			ref={main}
		>
			<div className="background">
				<img
					src={logo}
					alt="error"
					className="logo"
					style={{ transform: "translateX(" + scrollY * -1 + "px)" }}
				/>
				<div className="titles">
					<h1 style={{ transform: "translateX(" + scrollY * 1 + "px)" }}>
						Benvenuti al Fermi!
					</h1>
					<h2 style={{ transform: "translateX(" + scrollY * 0.9 + "px)" }}>
						Istituto superiore “Enrico Fermi”
					</h2>
					{/* <h3 style={{ transform: "translateX(" + scrollY * 0.8 + "px)" }}>
						Liceo scientifico delle scienze applicate
						<br /> Istituto tecnico Settore tecnologico
					</h3> */}
				</div>
			</div>

			<img className="clickButton" src={clickButton} alt="error" />
		</main>
	);
};

export default LandingPage;
