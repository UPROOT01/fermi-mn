import React from "react";
import HeaderBar from "../components/HeaderBar";
import banner from "../assets/banner.jpg";
import "./AboutUs.css";

interface Props {}

const AboutUsPage: React.FC<Props> = () => {
	return (
		<main className="AboutUsPage">
			<HeaderBar></HeaderBar>
			<div className="pageContainer">
				<section>
					<h1>La nostra storia</h1>
					<p>
						L'allora <b>Istituto Tecnico Industriale</b> nacque nel <b>1961</b>,
						con sede in Via Conciliazione, come distaccamento del <b>"Corni"</b>{" "}
						di Modena.
						<b>Fermo Corni</b> era un imprenditore del settore metallurgico
						vissuto tra il <b>1800</b> e il <b>1900</b>.
					</p>
					<p>
						La scuola divenne autonoma nel <b>1966</b> conservando però la
						medesima denominazione. Fu solo nel <b>1970</b> che il Collegio dei
						docenti scelse di intitolare l'istituto a <b>Enrico Fermi</b>, il
						grande fisico che era stato uno dei padri della fissione nucleare.
						Pochi anni dopo la scuola si trasferì nella sua attuale sede.
					</p>
					<p>
						Nel <b>1995</b> all'Istituto Tecnico Industriale fu annesso il{" "}
						<b>Liceo Scientifico Tecnologico</b>.
					</p>
					<p>
						Infine, dall'a.s. <b>2010-11</b>, a seguito della riforma, la scuola
						ha assunto l'attuale denominazione di{" "}
						<b>
							ISTITUTO SUPERIORE “E.FERMI”, Istituto Tecnico Settore Tecnologico
							- Liceo Scientifico delle Scienze Applicate
						</b>
						.
					</p>
				</section>
				<section>
					<h1>Mezzi di trasporto</h1>
					<p>
						La sede dell’Istituto è raggiungibile col bus <b>APAM</b> (stazione
						passante di fronte alla scuola) e anche tramite linea ferroviaria
						fermata Borgochiesanuova (linea Mantova Modena), a 50 metri dalla
						scuola.
					</p>
					<p>
						Per saperne di più, clicca qui sotto il link dell'azienda dei
						trasporti urbani oppure segui le indicazioni sui trasporti nella
						sezione <b>CALENDARIO-ORARI</b>. Presso il nostro Istituto è
						possibile acquistare biglietti e abbonamenti per tutte le corse.
					</p>
				</section>
				<section>
					<h1>Contatti</h1>
					<p>
						<b>
							ISTITUTO SUPERIORE "E.FERMI", Istituto Tecnico Settore Tecnologico
							- Liceo Scientifico delle Scienze Applicate
						</b>
						, Strada Spolverina 5, 46100 MANTOVA
					</p>
					<p>
						<b>Telefono:</b> (39) 0376-262675 <br /> <b>Indirizzi email:</b>
						mnis01100e@istruzione.it - mnis01100e@pec.istruzione.it
					</p>
				</section>
				<section>
					<h1>Informazioni utili</h1>
					<p>
						<b>Codice Meccanografico (C.M.):</b> MNIS01100E
						<br />
						<b>Codice Fiscale (C.F.):</b> 80016570204
						<br />
						<b>Codice univoco ufficio:</b> UF6LSZ
						<br />
						<b>Codice IPA:</b> istsc_mnis01100e
						<br />
						<br />
						Coordinate Bancarie
						<br />
						Istituto Superiore "E.Fermi" - Strada Spolverina, 5 - 46100 Mantova
						<br />
						<b>
							Conto Corrente Bancario (c.c.b.)IBAN: IT 62 S 05696 11500
							000013000X51
						</b>
						<br />
						<b>Conto tesoreria unica (c.t.u.):</b> 0313440
						<br />
						<br />
						<b>Coordinate Postali</b>
						<br />
						Istituto Superiore "E.Fermi" Servizio Cassa
						<br />
						Strada Spolverina, 5 - 46100 Mantova
						<br />
						<b>
							Conto Corrente Postale (c.c.p.) IBAN: IT 22 W 07601 11500
							000012443461
						</b>
						<br />
						<b>ccp:</b> 12443461
						<br />
						E' obbligatorio indicare la causale per ogni versamento alla scuola
					</p>
				</section>

				<img className="banner" src={banner} alt="error" />
			</div>
		</main>
	);
};

export default AboutUsPage;
