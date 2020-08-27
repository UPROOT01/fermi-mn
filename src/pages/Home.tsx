import React from "react";
import "./Home.css";
import Article from "../components/Article";
import HeaderBar from "../components/HeaderBar";
import { RouteComponentProps } from "react-router-dom";
import Slider from "../components/Slider";

interface Props extends RouteComponentProps {}

const HomePage: React.FC<Props> = ({ history, location, match }) => {
	return (
		<>
			<HeaderBar {...{ history, location, match }}></HeaderBar>
			<main className="HomePage">
				<Slider></Slider>
				<div className="mainList">
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
