import "./App.css";
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {Suspense} from "react";
import {routes} from "./core/routes";
import {GlobalProvider} from "./context/GlobalState";
import Loading from "./components/Loading";

function App() {
	const isLoggedIn = localStorage.getItem("isLoggedIn");

	return (
		<GlobalProvider>
			<Router>
				<Suspense fallback={<Loading/>}>
					<Switch>
						{routes.map(({path, Component, requireAuth}) => {
							if (requireAuth) {
								return isLoggedIn ? <Route key={path} exact path={path} render={() => <Component/>}/> :
									<Redirect key={path} to={"/login"}/>;
							} else {
								return <Route key={path} exact path={path} render={() => <Component/>}/>;
							}
						})}
					</Switch>
				</Suspense>
			</Router>
		</GlobalProvider>
	);
}

export default App;
