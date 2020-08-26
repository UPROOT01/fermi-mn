import React from "react";
import "./App.css";
import LandingPage from "./pages/Landing";
import HomePage from "./pages/Home";
import UsefulLinksPage from "./pages/UsefulLinks";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/home" component={HomePage}></Route>
				<Route path="/aboutUs" component={AboutUsPage}></Route>
				<Route path="/utility" component={UsefulLinksPage}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
