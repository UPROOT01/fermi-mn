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

const utilityLinks: { title: string, imageUrl: string, link: string }[] = [
	{ title: "Moodle", imageUrl: moodle, link: "https://moodle.fermi.mn.it/" },
	{ title: "Zimbra Mail", imageUrl: mail, link: "https://mail.fermi.mn.it/" },
	{ title: "Orario", imageUrl: analogClock, link: "https://www.fermimn.edu.it/orari/riservata/orario_in_corso/" },
	{ title: "Calendario Giornaliero", imageUrl: calendar, link: "https://www.fermimn.edu.it/orari/calendar.php" },
	{ title: "Registro Elettronico", imageUrl: mastercom, link: "http://fermi-mn-sito.registroelettronico.com/" },
	{ title: "Pon", imageUrl: pon, link: "https://www.fermimn.edu.it/PON/" },
	{ title: "Amministrazione Trasparente", imageUrl: repubblica, link: "https://www.fermimn.edu.it/spaggiari/trasparenza.php" },
	{ title: "Albo Pretorio", imageUrl: repubblica, link: "https://www.fermimn.edu.it/spaggiari/albo.php" },
	{ title: "PagoInRete", imageUrl: pagoInRete, link: "https://www.fermimn.edu.it/pagoinrete/" },
	{ title: "Bacheca Sindacale", imageUrl: bachecaSindacale, link: "http://albo.fermimn.edu.it/albi/bacheca-sindacale" },
];

interface UsefulLinksProps extends RouteComponentProps {}
interface SingleElementProps {
	title: string;
	imageUrl: string;
	link: string;
}

const SingleElement: React.FC<SingleElementProps> = ({ title, imageUrl, link }) => {
	return (
		<div className="SingleElement">
			<div className="container">
				<a className="ext-link" href={link}>
					<img src={imageUrl} alt="error" />
					<div className="title">{title}</div>
				</a>
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
