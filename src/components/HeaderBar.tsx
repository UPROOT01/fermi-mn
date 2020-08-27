import React, { useState } from "react";
import logoOutline from "../assets/logo_outline.svg";
import logoText from "../assets/logo_text.svg";
import "./HeaderBar.css";
import { RouteComponentProps } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

interface Props extends RouteComponentProps {}

const links: {
	title: string;
	link?: string;
	route?: string; //prima route poi link
	child?: { children: { title: string; link?: string; route?: string }[] };
}[] = [
	{ title: "Home", route: "/home" },
	{
		title: "Area riservata",
		child: {
			children: [
				{ title: "Studenti", link: "http://fermimn.edu.it/studenti/index.php" },
				{ title: "Genitori", link: "http://fermimn.edu.it/genitori/index.php" },
				{ title: "Docenti", link: "http://fermimn.edu.it/docenti/index.php" },
				{
					title: "Personale A.T.A.",
					link: "http://fermimn.edu.it/ATA/index.php",
				},
			],
		},
	},
	{
		title: "Istituto",
		child: {
			children: [
				{ title: "Chi Siamo", route: "/aboutUs" },
				{
					title: "Le Persone",
					link: "http://fermimn.edu.it/persone/index.php",
				},
				{
					title: "I nostri corsi",
					link: "http://fermimn.edu.it/struttura/index.php",
				},
				{
					title: "Strutture e Servizi",
					link: "http://fermimn.edu.it/servizi/index.php",
				},
				{
					title: "Documenti",
					link: "http://fermimn.edu.it/documenti/index.php",
				},
				{
					title: "Parlano di noi",
					link: "http://fermimn.edu.it/parlanodinoi/index.php",
				},
				{ title: "Bandi e Gare", link: "http://fermimn.edu.it/bandi/" },
			],
		},
	},
	{
		title: "Reti di Ambito",
		link:
			"http://www.istitutocomprensivoasola.gov.it/rete-di-ambito-19-mantova",
	},
	{
		title: "A.S. 2019/2020",
		child: {
			children: [
				{
					title: "Privacy GDPR 679/16",
					link: "http://fermimn.edu.it/privacy/index.php",
				},
				{
					title: "Calendario Orari",
					link: "http://fermimn.edu.it/orari/index.php",
				},
				{ title: "Progetti", link: "http://fermimn.edu.it/progetti/index.php" },
				{
					title: "Cittadinanza e Costituzione",
					link: "http://fermimn.edu.it/cittadinanza/index.php",
				},
				{
					title: "Formazione",
					link: "http://fermimn.edu.it/formazione/index.php",
				},
				{
					title: "Programmazione Comune",
					link: "https://www.fermi.mn.it/programmazione-comune/",
				},
				{
					title: "Alternanza Scuola Lavoro",
					link: "http://fermimn.edu.it/alternanza/",
				},
				{
					title: "Materiali Invalsi",
					link: "http://fermimn.edu.it/invalsi/index.php",
				},
				{
					title: "Info per III medie",
					link: "http://fermimn.edu.it/informazioni/index.php",
				},
				{
					title: "Orientamento in uscita",
					link: "http://fermimn.edu.it/orientamento_uni/index.php",
				},
				{
					title: "FabAcademy",
					link: "http://fermimn.edu.it/fabacademy/index.php",
				},
				{ title: "Innovazioni Green", link: "http://fermimn.edu.it/green/" },
				{
					title: "Viaggi ed uscite didattiche",
					link: "http://fermimn.edu.it/studenti/viaggi.php",
				},
			],
		},
	},
	{
		title: "Nostri siti",
		child: {
			children: [
				{
					title: "Open Source e Freeware",
					link: "http://fermimn.edu.it/opensource/index.php",
				},
				{
					title: "I siti del Fermi",
					link: "http://fermimn.edu.it/storia/index.php",
				},
				{
					title: "Fotovoltaico",
					link: "http://servizi.fermi.mn.it/fotovoltaico/",
				},
				{
					title: "Dati Energetici",
					link: "http://servizi.fermi.mn.it/fotovoltaico/provincia.php",
				},
				{
					title: "Archivio di Stato",
					link: "http://fermimn.edu.it/archiviodistato/index.php",
				},
				{ title: "Scuola21", link: "http://scuola21.fermi.mn.it/" },
				{ title: "Progetto LER", link: "http://ler.fermimn.edu.it/index.php" },
			],
		},
	},
	{ title: "Link utili", route: "/utility" },
];

const isLastOpen = (array: { [index: number]: boolean }) => {
	if (array[links.length - 1] === undefined) {
		return false;
	}

	return array[links.length - 1];
};

const HeaderBar: React.FC<Props> = ({ history }) => {
	const [linksState, setLinksState] = useState(() => {
		const obj: { [index: number]: boolean } = {};

		links.forEach((link, index) => {
			if (link.child !== undefined) {
				obj[index] = false;
			}
		});

		return obj;
	});
	const [mobileMenu, setMobileMenu] = useState(false);

	const openMenu = (index: number) => {
		const changeValue = !linksState[index];

		for (const i in linksState) {
			linksState[i] = false;
		}

		setLinksState({
			...linksState,
			[index]: changeValue,
		});
	};

	return (
		<div className="header-main">
			<div className="header-container">
				<div
					className="header-logo-container"
					onClick={() => history.push("/home")}
				>
					<img className="header-logo-img" src={logoOutline} alt="error" />
				</div>
				<img
					onClick={() => history.push("/home")}
					className="header-logo-text"
					src={logoText}
					alt="error"
				/>
				<div className="header-link-container">
					{links.map((link, index) => {
						if (link.route !== undefined) {
							return (
								<span
									className="header-spaced"
									key={index + "d"}
									onClick={() => {
										history.push(link.route!.toString());
									}}
								>
									{link.title}
								</span>
							);
						} else if (link.link !== undefined) {
							return (
								<span className="header-spaced" key={index + "d"}>
									<a className="header-ext-link" href={link.link}>
										{link.title}
									</a>
								</span>
							);
						} else if (link.child === undefined) {
							return (
								<span className="header-spaced" key={index + "d"}>
									{link.title}
								</span>
							);
						} else {
							return (
								<React.Fragment key={index + "ddddd"}>
									<span
										key={index + "d"}
										className="header-spaced"
										onClick={() => openMenu(index)}
									>
										{link.title}
									</span>
									<span
										onClick={() => openMenu(index)}
										className={linksState[index] ? "header-rotated" : ""}
										key={index + "icon"}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
										</svg>
									</span>
								</React.Fragment>
							);
						}
					})}
					<div className="header-social-container">
						<img className="header-social-icon" src={facebook} alt="error" />
						<img className="header-social-icon" src={instagram} alt="error" />
						<img className="header-social-icon" src={twitter} alt="error" />
					</div>
				</div>
				<span
					className="header-hamburger"
					onClick={() => setMobileMenu(!mobileMenu)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
					</svg>
				</span>
			</div>
			<div
				className={
					"header-mobile-menu" +
					(mobileMenu ? "" : " header-mobile-hidden") +
					(isLastOpen(linksState) ? "" : " header-mobile-lastopen")
				}
			>
				{links.map((link, index) => {
					if (link.route !== undefined) {
						return (
							<React.Fragment key={index + "mobiledddddd"}>
								<p>
									<span
										key={index + "mobile"}
										className="header-spaced"
										onClick={() => history.push(link.route!.toString())}
									>
										{link.title}
									</span>
								</p>
							</React.Fragment>
						);
					} else if (link.link !== undefined) {
						return (
							<React.Fragment key={index + "mobiledddddd"}>
								<p>
									<span key={index + "mobile"} className="header-spaced">
										<a className="header-ext-link" href={link.link}>
											{link.title}
										</a>
									</span>
								</p>
							</React.Fragment>
						);
					}

					if (link.child === undefined) {
						return (
							<React.Fragment key={index + "mobiledddddd"}>
								<p>
									<span key={index + "mobile"} className="header-spaced">
										{link.title}
									</span>
								</p>
							</React.Fragment>
						);
					} else {
						return (
							<React.Fragment key={index + "mobiledddd"}>
								<p onClick={() => openMenu(index)}>
									<span key={index + "mobile"} className="header-spaced">
										{link.title}
									</span>

									<span
										className={
											"header-span-special " +
											(linksState[index] ? "header-rotated" : "")
										}
										key={index + "mobile icon"}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
										</svg>
									</span>
								</p>
								<div
									className={
										linksState[index] ? "header-menu" : "header-hidden"
									}
									key={index + "mobileHeaderMenu"}
								>
									{link.child.children.map((child, j) => {
										if (child.route !== undefined) {
											return (
												<React.Fragment key={index + " " + j + "chchdddd"}>
													<p
														key={index + " " + j + "chch"}
														onClick={() => history.push(child.route as string)}
													>
														<span>{child.title}</span>
													</p>
												</React.Fragment>
											);
										} else if (child.link !== undefined) {
											return (
												<React.Fragment key={index + " " + j + "chchdddd"}>
													<p key={index + " " + j + "chch"}>
														<span>
															<a className="header-ext-link" href={child.link}>
																{child.title}
															</a>
														</span>
													</p>
												</React.Fragment>
											);
										}
									})}
								</div>
							</React.Fragment>
						);
					}
				})}
			</div>
		</div>
	);
};

export default HeaderBar;
