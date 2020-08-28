import React, { useEffect, useState, useRef } from "react";
import "./Landing.css";
import logo from "../assets/logo.png";
import clickButton from "../assets/clickButton.svg";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const multiLanguageTitle = [
	"Benvenuti al Fermi!",
	"Welcome to Fermi!",
	"Willkommen bei Fermi!",
	"Bienvenido a Fermi",
	"Bienvenue à Fermi",
];

const LandingPage: React.FC<Props> = ({ history }) => {
	const [scrollY, setScrollY] = useState(0);
	const main = useRef<HTMLElement>(null);
	const [titleIndex, setTitleIndex] = useState(0);
	// const [mainHeight, setMainHeight] = useState(0);

	useEffect(() => {
		const scrollAnimation = () => {
			if (window.scrollY <= main.current!.clientHeight) {
				setScrollY(window.scrollY);
			}
		};
		window.addEventListener("scroll", scrollAnimation);

		setTimeout(() => {
			setTitleIndex(1);
		}, 1500);

		// setMainHeight(main.current!.clientHeight);

		return () => {
			window.removeEventListener("scroll", scrollAnimation);
		};
	}, []);

	useEffect(() => {
		const handler = setInterval(() => {
			setTitleIndex((titleIndex + 1) % multiLanguageTitle.length);
		}, 3000);
		return () => {
			clearInterval(handler);
		};
	}, [titleIndex]);

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
						{multiLanguageTitle.map((language, index) => (
							<span
								key={index}
								style={{
									opacity: index === titleIndex ? "1" : "0",
									...{
										position: "absolute",
										left: "0",
										top: "0",
									},
								}}
							>
								{language}
							</span>
						))}
					</h1>
					<h2 style={{ transform: "translateX(" + scrollY * 0.9 + "px)" }}>
						Istituto Superiore E. FERMI - Mantova
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
