import React from "react";
import moodle from "../assets/useful_links/moodle_icon.jpeg";
import mail from "../assets/useful_links/mail.png";
import analogClock from "../assets/useful_links/analogclock.png";
import calendar from "../assets/useful_links/calendar.png";
import mastercom from "../assets/useful_links/mastercom.png";
import pon from "../assets/useful_links/pon.png";
import repubblica from "../assets/useful_links/repubblica.png";
import pagoInRete from "../assets/useful_links/pagoinrete.jpg";
import bachecaSindacale from "../assets/useful_links/bachecasindacale.png";

import "./UsefulLinks.css";
import HeaderBar from "../components/HeaderBar";
import { RouteComponentProps } from "react-router-dom";

const utilityLinks: { title: string; imageUrl: string }[] = [
	{ title: "Moodle", imageUrl: moodle },
	{ title: "Zimbra Mail", imageUrl: mail },
	{ title: "Orario", imageUrl: analogClock },
	{ title: "Calendario Giornaliero", imageUrl: calendar },
	{ title: "Registro Elettronico", imageUrl: mastercom },
	{ title: "Pon", imageUrl: pon },
	{ title: "Amministrazione Trasparente", imageUrl: repubblica },
	{ title: "Albo Pretorio", imageUrl: repubblica },
	{ title: "PagoInRete", imageUrl: pagoInRete },
	{ title: "Bacheca Sindacale", imageUrl: bachecaSindacale },
];

interface UsefulLinksProps extends RouteComponentProps {}
interface SingleElementProps {
	title: string;
	imageUrl: string;
}

const SingleElement: React.FC<SingleElementProps> = ({ title, imageUrl }) => {
	return (
		<div className="SingleElement">
			<div className="container">
				<img src={imageUrl} alt="error" />
				<div className="title">{title}</div>
			</div>
		</div>
	);
};

const UsefulLinksPage: React.FC<UsefulLinksProps> = ({
	history,
	location,
	match,
}) => {
	return (
		<>
			<HeaderBar {...{ history, location, match }}></HeaderBar>
			<main className="UsefulLinksPage">
				<div className="main-container">
					{utilityLinks.map((link, index) => (
						<SingleElement key={index} {...link}></SingleElement>
					))}
				</div>
			</main>
		</>
	);
};

export default UsefulLinksPage;
