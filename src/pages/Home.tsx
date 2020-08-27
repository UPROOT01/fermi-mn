import React from "react";
import "./Home.css";
import Article from "../components/Article";
import HeaderBar from "../components/HeaderBar";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const HomePage: React.FC<Props> = ({ history, location, match }) => {
	return (
		<>
			<HeaderBar {...{ history, location, match }}></HeaderBar>
			<main className="HomePage">
				<div className="mainList">
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="
							In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà, dico apposta quasi perchè qualcuno (pochissimi in realtà) non si è comportato proprio come ci aspettavamo, ma nessuno sarà lasciato solo se vorrà essere aiutato a superare le difficoltà.
							
							Non so cosa ci attenderà il prossimo anno, ma noi saremo qui ad aspettarvi!
							
							Buona estate a tutti
							
							D.ssa Marianna Pavesi
							Dirigente Scolastica
							IS E.Fermi -Mantova
							(notizia del 8-6-2020)"
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
					<div className="wrapper">
						<Article
							title="ULTIMO GIORNO DI SCUOLA"
							description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
							imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
						></Article>
					</div>
				</div>
			</main>
		</>
	);
};

export default HomePage;
