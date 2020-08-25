import React from "react";
import HeaderBar from "../components/HeaderBar";
import banner from "./banner.jpg";
import "./AboutUs.css";

interface Props {}

const AboutUsPage: React.FC<Props> = () => {
	return (
		<main className="AboutUsPage">
			<HeaderBar></HeaderBar>
			<section>
				<h1>La nostra storia</h1>
				<p>
					L'allora Istituto Tecnico Industriale nacque nel 1961, con sede in Via
					Conciliazione, come distaccamento del "Corni" di Modena. Fermo Corni
					era un imprenditore del settore metallurgico vissuto tra il 1800 e il
					1900.
				</p>
				<p>
					La scuola divenne autonoma nel 1966 conservando però la medesima
					denominazione. Fu solo nel 1970 che il Collegio dei docenti scelse di
					intitolare l'istituto a Enrico Fermi, il grande fisico che era stato
					uno dei padri della fissione nucleare. Pochi anni dopo la scuola si
					trasferì nella sua attuale sede.
				</p>
				<p>
					Nel 1995 all'Istituto Tecnico Industriale fu annesso il Liceo
					Scientifico Tecnologico.
				</p>
				<p>
					Infine, dall'a.s. 2010-11, a seguito della riforma, la scuola ha
					assunto l'attuale denominazione di ISTITUTO SUPERIORE “E.FERMI”,
					Istituto Tecnico Settore Tecnologico - Liceo Scientifico delle Scienze
					Applicate.
				</p>
			</section>
			<section>
				<h1>Mezzi di trasporto</h1>
				<p>
					La sede dell’Istituto è raggiungibile col bus APAM (stazione passante
					di fronte alla scuola) e anche tramite linea ferroviaria fermata
					Borgochiesanuova (linea Mantova Modena), a 50 metri dalla scuola.
				</p>
				<p>
					Per saperne di più, clicca qui sotto il link dell'azienda dei
					trasporti urbani oppure segui le indicazioni sui trasporti nella
					sezione CALENDARIO-ORARI. Presso il nostro Istituto è possibile
					acquistare biglietti e abbonamenti per tutte le corse.
				</p>
			</section>
			<section>
				<h1>Contatti</h1>
				<p>
					ISTITUTO SUPERIORE "E.FERMI", Istituto Tecnico Settore Tecnologico -
					Liceo Scientifico delle Scienze Applicate, Strada Spolverina 5, 46100
					MANTOVA
				</p>
				<p>
					Telefono: (39) 0376-262675 <br /> Indirizzi email:
					mnis01100e@istruzione.it - mnis01100e@pec.istruzione.it
				</p>
			</section>
			<section>
				<h1>Informazioni utili</h1>
				<p>
					Codice Meccanografico (C.M.): MNIS01100E
					<br />
					Codice Fiscale (C.F.): 80016570204
					<br />
					Codice univoco ufficio: UF6LSZ
					<br />
					Codice IPA: istsc_mnis01100e
					<br />
					<br />
					Coordinate Bancarie
					<br />
					Istituto Superiore "E.Fermi" - Strada Spolverina, 5 - 46100 Mantova
					<br />
					Conto Corrente Bancario (c.c.b.)IBAN: IT 62 S 05696 11500 000013000X51
					<br />
					Conto tesoreria unica (c.t.u.): 0313440
					<br />
					<br />
					Coordinate Postali
					<br />
					Istituto Superiore "E.Fermi" Servizio Cassa
					<br />
					Strada Spolverina, 5 - 46100 Mantova
					<br />
					Conto Corrente Postale (c.c.p.) IBAN: IT 22 W 07601 11500 000012443461
					<br />
					ccp: 12443461
					<br />
					E' obbligatorio indicare la causale per ogni versamento alla scuola
				</p>
			</section>

			<img className="banner" src={banner} alt="error" />
		</main>
	);
};

export default AboutUsPage;
