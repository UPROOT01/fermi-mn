import React, { useState } from "react";
import logoOutline from "../assets/logo_outline.svg";
import logoText from "../assets/logo_text.svg";
import "./HeaderBar.css";

interface Props {}

const links: {
	title: string;
	link?: string;
	child?: { children: { title: string; link: string }[] };
}[] = [
	{ title: "Home" },
	{
		title: "Area riservata",
		child: {
			children: [
				{ title: "Studenti", link: "" },
				{ title: "Genitori", link: "" },
				{ title: "Docenti", link: "" },
				{ title: "Personale A.T.A.", link: "" },
			],
		},
	},
	{
		title: "Istituto",
		child: {
			children: [
				{ title: "Chi Siamo", link: "" },
				{ title: "Le Persone", link: "" },
				{ title: "I nostri corsi", link: "" },
				{ title: "Strutture e Servizi", link: "" },
				{ title: "Documenti", link: "" },
				{ title: "Parlano di noi", link: "" },
				{ title: "Bandi e Gare", link: "" },
			],
		},
	},
	{ title: "Reti di Ambito" },
	{
		title: "A.S. 2019/2020",
		child: {
			children: [
				{ title: "Privacy GDPR 679/16", link: "" },
				{ title: "Calendario Orari", link: "" },
				{ title: "Progetti", link: "" },
				{ title: "Cittadinanza e Costituzione", link: "" },
				{ title: "Formazione", link: "" },
				{ title: "Programmazione Comune", link: "" },
				{ title: "Alternanza Scuola Lavoro", link: "" },
				{ title: "Materiali Invalsi", link: "" },
				{ title: "Info per III medie", link: "" },
				{ title: "Orientamento in uscita", link: "" },
				{ title: "FabAcademy", link: "" },
				{ title: "Innovazioni Green", link: "" },
				{ title: "Viaggi ed uscite didattiche", link: "" },
			],
		},
	},
	{
		title: "Nostri siti",
		child: {
			children: [
				{ title: "Open Source e Freeware", link: "" },
				{ title: "I siti del Fermi", link: "" },
				{ title: "Fotovoltaico", link: "" },
				{ title: "Dati Energetici", link: "" },
				{ title: "Archivio di Stato", link: "" },
				{ title: "Scuola21", link: "" },
				{ title: "Progetto LER", link: "" },
			],
		},
	},
	{ title: "Link utili" },
];

const isLastOpen = (array: { [index: number]: boolean }) => {
	if (array[links.length - 1] === undefined) {
		return false;
	}

	return array[links.length - 1];
};

const HeaderBar: React.FC<Props> = () => {
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
				<div className="header-logo-container">
					<img className="header-logo-img" src={logoOutline} alt="error" />
					<img className="header-logo-text" src={logoText} alt="error" />
				</div>
				{links.map((link, index) => {
					if (link.child === undefined) {
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
									{link.child.children.map((child, j) => (
										<React.Fragment key={index + " " + j + "chchdddd"}>
											<p key={index + " " + j + "chch"}>
												<span>{child.title}</span>
											</p>
										</React.Fragment>
									))}
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
