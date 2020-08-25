import React, { useState } from "react";

import "./HeaderBar.css";

interface Props {}

const HeaderBar: React.FC<Props> = () => {
    const [activeMenus, setActiveMenus] = useState([false, false, false, false]);

    return (
        <div className="header-main">
            <div className="header-container">
                <span>Home</span>
                <span className="header-spaced" onClick={() => setActiveMenus([!activeMenus[0], false, false, false])}>Area riservata</span>
                <span className={activeMenus[0] ? "header-rotated" : ""}>⯆</span>
                <span className="header-spaced" onClick={() => setActiveMenus([false, !activeMenus[1], false, false])}>Istituto</span>
                <span className={activeMenus[1] ? "header-rotated" : ""}>⯆</span>
                <span className="header-spaced">Reti di ambito</span>
                <span className="header-spaced" onClick={() => setActiveMenus([false, false, !activeMenus[2], false])}>A.S. 2019/2020</span>
                <span className={activeMenus[2] ? "header-rotated" : ""}>⯆</span>
                <span className="header-spaced" onClick={() => setActiveMenus([false, false, false, !activeMenus[3]])}>I nostri siti</span>
                <span className={activeMenus[3] ? "header-rotated" : ""}>⯆</span>
                <span className="header-spaced">Link utili</span>
            </div>

            <div id="header-area-riservata" className={activeMenus[0] ? "header-menu" : "header-hidden"}>
                <span>Studenti</span><br/><br/>
                <span>Genitori</span><br/><br/>
                <span>Docenti</span><br/><br/>
                <span>Personale A.T.A</span>
            </div>

            <div id="header-istituto" className={activeMenus[1] ? "header-menu" : "header-hidden"}>
                <span>Chi siamo</span><br/><br/>
                <span>Le persone</span><br/><br/>
                <span>I nostri corsi</span><br/><br/>
                <span>Strutture e Servizi</span><br/><br/>
                <span>Documenti</span><br/><br/>
                <span>Parlano di noi</span><br/><br/>
                <span>Bandi e Gare</span>
            </div>

            <div id="header-anno-scolastico" className={activeMenus[2] ? "header-menu" : "header-hidden"}>
                <span>Privacy GDPR 679/16</span><br/><br/>
                <span>Calendario Orari</span><br/><br/>
                <span>Progetti</span><br/><br/>
                <span>Cittadinanza e Costituzione</span><br/><br/>
                <span>Formazione</span><br/><br/>
                <span>Programmazione comune</span><br/><br/>
                <span>Alternanza Scuola Lavoro</span><br/><br/>
                <span>Materiali Invalsi</span><br/><br/>
                <span>Info per III medie</span><br/><br/>
                <span>Orientamento in uscita</span><br/><br/>
                <span>FabAcademy</span><br/><br/>
                <span>Innovazioni Green</span><br/><br/>
                <span>Viaggi ed uscite didattiche</span>
            </div>

            <div id="header-nostri-siti" className={activeMenus[3] ? "header-menu" : "header-hidden"}>
                <span>Open Source e Freeware</span><br/><br/>
                <span>I siti del Fermi</span><br/><br/>
                <span>Fotovoltaico</span><br/><br/>
                <span>Dati Energetici</span><br/><br/>
                <span>Archivio di Stato</span><br/><br/>
                <span>Scuola 21</span><br/><br/>
                <span>Progetto LER</span>
            </div>
        </div>
    );
}

export default HeaderBar;