import React from "react";
import "./App.css";
import LandingPage from "./pages/Landing";
import Slider from "./components/Slider";
import Article from "./components/Article";

function App() {
	return (
		<div style={{ width: "60%" }}>
			<Article
				title="ULTIMO GIORNO DI SCUOLA"
				description="In questo strano ultimo giorno di scuola ci tenevo a salutare tutte le ragazze e i ragazzi, sono orgogliosa di voi perchè quasi tutti avete affrontato questo lungo periodo con grande serietà..."
				imageUrl="https://www.fermimn.edu.it/?clean=true&action=icon&newsid=752"
			></Article>
		</div>
	);
}

export default App;
