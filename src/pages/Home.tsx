import React from "react";
import "./Home.css";
import Article from "../components/Article";
import HeaderBar from "../components/HeaderBar";
import { RouteComponentProps } from "react-router-dom";
import Slider from "../components/Slider";
import LandingPage from "./Landing";

interface Props extends RouteComponentProps {}

const articles: {
	title: string;
	description: string;
	imageUrl: string;
	date: Date;
}[] = [
	{
		title: "ULTIMO GIORNO DI SCUOLA",
		description: `
			In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà, dico apposta quasi perchè qualcuno (pochissimi in realtà) non si è comportato proprio come ci aspettavamo, ma nessuno sarà lasciato solo se vorrà essere aiutato a superare le difficoltà.
			
			Non so cosa ci attenderà il prossimo anno, ma noi saremo qui ad aspettarvi!
			
			Buona estate a tutti
			
			D.ssa Marianna Pavesi
			Dirigente Scolastica
			IS E.Fermi -Mantova`,
		imageUrl: "https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752",
		date: new Date(Date.now()),
	},
	{
		title:
			"GRADUATORIE PROVINCIALI E D'ISTITUTO: DOMANDE DAL 22 LUGLIO AL 6 AGOSTO",
		description: `Il Ministero dell’Istruzione con il decreto dipartimentale 858/20 ha dato il via alla procedura per l’inserimento nelle Graduatorie Provinciali e di Istituto per le Supplenze. Gli aspiranti potranno presentare domanda a partire dalle ore 15.00 di mercoledì 22 luglio 2020, fino alle ore 23.59 del 6 agosto.

		Le istanze potranno essere presentate attraverso l’applicazione “Istanze online (POLIS)”. Sarà necessario possedere le credenziali SPID, o in alternativa, un’utenza valida per l’accesso ai servizi presenti nell’area riservata del Ministero con l’abilitazione specifica al servizio “Istanze online (POLIS)”.
		Gli aspiranti potranno scegliere una provincia e 20 scuole della medesima provincia.`,
		imageUrl: "https://www.fermimn.edu.it/?clean=true&action=icon&newsid=754",
		date: new Date(2020, 7, 22),
	},
	{
		title: "INFO CLASSI PRIME 2020/2021",
		description: `Sono state pubblicate tutte le informazioni per il perfezionamento delle iscrizioni delle classi prime per l'a.s. 2020/21.
		vai alla pagina https://www.fermimn.edu.it/informazioni/index.php`,
		imageUrl: "https://www.fermimn.edu.it/?clean=true&action=icon&newsid=753",
		date: new Date(2020, 7, 1),
	},
	{
		title: "TROFEO SMART PROJECT",
		description: `L’istituto il 27/05/2020 ha partecipato al Trofeo Smart Project Omron, un’attività contemplata nel Protocollo d’Intesa con il MIUR e rappresenta uno standard di massimo livello, per il PNSD (Piano Nazionale Scuola Digitale), e come competizione valevole per la Valorizzazione delle Eccellenze degli Istituti Tecnici e Professionali.

		IL nostro istituto si è classificato tra i primi dieci posti, confrontandosi con istituti tecnici dell’intero territorio nazionale.
		
		Quest'anno il progetto si è concretizzato nella realizzazione di un sistema di automazione con relativa simulazione, la programmazione del PLC e del pannello operatore (un’interfaccia uomo macchina, HMI).
		
		Nello specifico il progetto proposto dal I.S. “E. Fermi” consiste nella progettazione di un apparato (inseguitore solare astronomico) per il miglioramento della produzione di energia da pannello fotovoltaico.
		
		L'inseguitore è programmato per inseguire la posizione del sole nell'arco del suo moto diurno e stagionale.
		
		Gli studenti hanno mostrato competenze di progettazione e realizzazione di automazioni legate nel contesto economico reale dell’Industria 4.0. dalla simulazione alla realizzazione, dall’idea alla sua valutazione, e hanno posto le basi per quella nuova filosofia che emerge in Giappone “società 5.0”, la quale vede le nuove tecnologie come opportunità per mettere in campo servizi alla famiglia e alla persona, puntando sul valore aggiunto anziché sul puro aspetto economico.
		
		Negli anni prossimi l'obiettivo sarà quello di realizzare fisicamente l’impianto e di completarlo con le necessarie apparecchiature per il monitoraggio delle prestazioni di produzione di energia elettrica da pannello fotovoltaico utilizzando le diverse competenze settoriali presenti nel progetto.
		
		Un grazie da parte dei responsabili del progetto che hanno riconosciuto nei nostri alunni doti di resistenza e resilienza in un periodo difficile come questo: prof. Pasquale Varone, prof. Nicola Adinolfi, prof. Pasquale Guariglia, prof. Stefano Salvi e A.T. Angela Rossi.
		
		Un grazie ai nostri ragazzi che hanno reso possibile l’evento: Simone Boschini (5BMME), Elia Coppiardi, Samuele Ghidini, Mattia Scolari (5AMME) e Luca Zanni, Davide Falzi (5IINF).`,
		imageUrl: "https://www.fermimn.edu.it/?clean=true&action=icon&newsid=751",
		date: new Date(2020, 6, 8),
	},
	{
		title:
			"INIZIATIVA DEI GENITORI DEL FERMI A SUPPORTO DELLA DIDATTICA A DISTANZA",
		description: `Gent.me Famiglie, il Consiglio di Istituto, nella seduta del 13 maggio, ha approvato all’unanimità l’iniziativa promossa dai genitori eletti nel C.d.I. e destinata a sovvenzionare la dotazione di strumentazione tecnica per la didattica a distanza: più precisamente l’acquisto di ausili tecnici per le aule e di PC portatili, videocamere, cuffie, etc., .da cedere in uso agli studenti del “FERMI” che si trovassero nella impossibilità di disporre del minimo necessario per seguire interattivamente la didattica a distanza.

		Tale opportunità verrebbe resa attraverso lo strumento della donazione su base volontaria, a mezzo bonifico a favore del “FERMI” ai numeri IBAN di c.c. bancario/postale indicati sul sito ufficiale della ns. scuola nell’intestazione. La causale da indicare nel bonifico sarà la seguente: “Supporto Emergenza COVID 19 - Dotazione strumentazione tecnica per la Didattica a distanza”.
		
		L’Istituto “FERMI” provvederà poi, a consuntivo, al rilascio di attestazione di avvenuto versamento ai fini delle detrazioni consentite dalla normativa fiscale vigente (COVID 19 - attuale % di detraibilità 30% sull’importo versato).
		
		Le somme raccolte verranno inserite nel Bilancio dell’Istituto “FERMI” al sotto-progetto appositamente istituito per l’iniziativa, che verrà diffusa anche attraverso i canali di comunicazione della nostra scuola e che rimarrà aperta fino al termine dell’emergenza sanitaria decretata per il 31/12/2020.
		
		Il Presidente del C.d.I.
		Davide Migliorini`,
		imageUrl: "https://www.fermimn.edu.it/?clean=true&action=icon&newsid=749",
		date: new Date(2020, 5, 23),
	},
];

const HomePage: React.FC<Props> = ({ history, location, match }) => {
	return (
		<>
			<LandingPage {...{ history, location, match }}></LandingPage>
			<HeaderBar {...{ history, location, match }}></HeaderBar>
			<main className="HomePage">
				<Slider></Slider>
				<div className="mainList">
					{articles.map((article, index) => {
						return (
							<div className="wrapper" key={"article" + index}>
								<Article {...article}></Article>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default HomePage;
