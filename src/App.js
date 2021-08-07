import './App.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {Suspense} from "react";
import {routes} from "./core/routes";

function App() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
        <Router>
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    {routes.map(({path, Component, requireAuth}) => {
                        if (requireAuth) {
                            return isLoggedIn ? <Route key={path} exact path={path} render={() => <Component/>}/> :
                                <Redirect key={path} to={"/login"}/>
                        } else {
                            return <Route key={path} exact path={path} render={() => <Component/>}/>
                        }
                    })}
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
