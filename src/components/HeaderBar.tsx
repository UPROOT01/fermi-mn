import React, { useState } from "react";
import logoOutline from "./logo_outline.svg";
import logoText from "./logo_text.svg";
import "./HeaderBar.css";

interface Props {}

const HeaderBar: React.FC<Props> = () => {
	const [activeMenus, setActiveMenus] = useState([false, false, false, false]);
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div className="header-main">
			<div className="header-container">
				<div className="header-logo-container">
					<img className="header-logo-img" src={logoOutline} alt="error" />
					<img className="header-logo-text" src={logoText} alt="error" />
				</div>
				<span>Home</span>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([!activeMenus[0], false, false, false])}
				>
					Area riservata
				</span>
				<span
					onClick={() => setActiveMenus([!activeMenus[0], false, false, false])}
					className={activeMenus[0] ? "header-rotated" : ""}
				>
					⯆
				</span>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, !activeMenus[1], false, false])}
				>
					Istituto
				</span>
				<span
					onClick={() => setActiveMenus([false, !activeMenus[1], false, false])}
					className={activeMenus[1] ? "header-rotated" : ""}
				>
					⯆
				</span>
				<span className="header-spaced">Reti di ambito</span>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, false, !activeMenus[2], false])}
				>
					A.S. 2019/2020
				</span>
				<span
					onClick={() => setActiveMenus([false, false, !activeMenus[2], false])}
					className={activeMenus[2] ? "header-rotated" : ""}
				>
					⯆
				</span>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, false, false, !activeMenus[3]])}
				>
					I nostri siti
				</span>
				<span
					onClick={() => setActiveMenus([false, false, false, !activeMenus[3]])}
					className={activeMenus[3] ? "header-rotated" : ""}
				>
					⯆
				</span>
				<span className="header-spaced">Link utili</span>
				<span className="header-hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
				</span>
			</div>

			<div className={"header-mobile-menu" + (mobileMenu ? "" : " header-mobile-hidden")}>
				<span className="header-spaced">Home</span><br/><br/>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([!activeMenus[0], false, false, false])}
				>
					Area riservata
				</span>
				<span
					onClick={() => setActiveMenus([!activeMenus[0], false, false, false])}
					className={activeMenus[0] ? "header-rotated" : ""}
				>
					⯆
				</span><br/>
				<div
					id="header-area-riservata"
					className={activeMenus[0] ? "header-menu" : "header-hidden"}
				>
					<span>Studenti</span>
					<br />
					<br />
					<span>Genitori</span>
					<br />
					<br />
					<span>Docenti</span>
					<br />
					<br />
					<span>Personale A.T.A</span>
				</div><br/>

				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, !activeMenus[1], false, false])}
				>
					Istituto
				</span>
				<span
					onClick={() => setActiveMenus([false, !activeMenus[1], false, false])}
					className={activeMenus[1] ? "header-rotated" : ""}
				>
					⯆
				</span><br/>
				<div
					id="header-istituto"
					className={activeMenus[1] ? "header-menu" : "header-hidden"}
				>
					<span>Chi siamo</span>
					<br />
					<br />
					<span>Le persone</span>
					<br />
					<br />
					<span>I nostri corsi</span>
					<br />
					<br />
					<span>Strutture e Servizi</span>
					<br />
					<br />
					<span>Documenti</span>
					<br />
					<br />
					<span>Parlano di noi</span>
					<br />
					<br />
					<span>Bandi e Gare</span>
				</div><br/>

				<span className="header-spaced">Reti di ambito</span><br/><br/>
				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, false, !activeMenus[2], false])}
				>
					A.S. 2019/2020
				</span>
				<span
					onClick={() => setActiveMenus([false, false, !activeMenus[2], false])}
					className={activeMenus[2] ? "header-rotated" : ""}
				>
					⯆
				</span><br/>
				<div
					id="header-anno-scolastico"
					className={activeMenus[2] ? "header-menu" : "header-hidden"}
				>
					<span>Privacy GDPR 679/16</span>
					<br />
					<br />
					<span>Calendario Orari</span>
					<br />
					<br />
					<span>Progetti</span>
					<br />
					<br />
					<span>Cittadinanza e Costituzione</span>
					<br />
					<br />
					<span>Formazione</span>
					<br />
					<br />
					<span>Programmazione comune</span>
					<br />
					<br />
					<span>Alternanza Scuola Lavoro</span>
					<br />
					<br />
					<span>Materiali Invalsi</span>
					<br />
					<br />
					<span>Info per III medie</span>
					<br />
					<br />
					<span>Orientamento in uscita</span>
					<br />
					<br />
					<span>FabAcademy</span>
					<br />
					<br />
					<span>Innovazioni Green</span>
					<br />
					<br />
					<span>Viaggi ed uscite didattiche</span>
				</div><br/>

				<span
					className="header-spaced"
					onClick={() => setActiveMenus([false, false, false, !activeMenus[3]])}
				>
					I nostri siti
				</span>
				<span
					onClick={() => setActiveMenus([false, false, false, !activeMenus[3]])}
					className={activeMenus[3] ? "header-rotated" : ""}
				>
					⯆
				</span><br/><br/>
				<div
					id="header-nostri-siti"
					className={activeMenus[3] ? "header-menu" : "header-hidden"}
				>
					<span>Open Source e Freeware</span>
					<br />
					<br />
					<span>I siti del Fermi</span>
					<br />
					<br />
					<span>Fotovoltaico</span>
					<br />
					<br />
					<span>Dati Energetici</span>
					<br />
					<br />
					<span>Archivio di Stato</span>
					<br />
					<br />
					<span>Scuola 21</span>
					<br />
					<br />
					<span>Progetto LER</span>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
