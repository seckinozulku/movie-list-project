import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Suspense} from "react";
import {routes} from "./core/routes";
import {GlobalProvider} from "./context/GlobalState";
import Loading from "./components/Loading";

function App() {

	return (
		<GlobalProvider>
			<Router>
				<Suspense fallback={<Loading/>}>
					<Switch>
						{routes.map(({path, Component}) => {
							return <Route key={path} exact path={path} render={() => <Component/>}/>;
						})}
					</Switch>
				</Suspense>
			</Router>
		</GlobalProvider>
	);
}

export default App;
