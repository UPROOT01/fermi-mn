import React from "react";
import "./App.css";
import LandingPage from "./pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "./pages/Loading";

const HomePage = React.lazy(() => import("./pages/Home"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs"));
const UsefulLinksPage = React.lazy(() => import("./pages/UsefulLinks"));

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={LandingPage}></Route>
				<React.Suspense fallback={<LoadingPage></LoadingPage>}>
					<Route path="/home" exact component={HomePage}></Route>
					<Route path="/aboutUs" exact component={AboutUsPage}></Route>
					<Route path="/utility" exact component={UsefulLinksPage}></Route>
				</React.Suspense>
				<Route
					path="/"
					render={() => <h1>Error 404 page not found</h1>}
				></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
