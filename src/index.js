import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';

const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
            <Route path="/stack" component={Landing} />
            <Route path="/about" component={Landing} />
            <Route path="/work" component={Landing} />
            <Route path="/focus" component={Landing} />
            <Route path="/" component={Landing} />
            </Switch>
        </Router>
    )
};

ReactDOM.render(
    <App />, document.getElementById('root')
);