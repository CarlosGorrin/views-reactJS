import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import About from './views/About/About';
import Stack from './views/Stack/Stack';
import Work from './views/Work/Work';
import Focus from './views/Focus/Focus';
import Home from './views/Home/Home';
import Nav from "../src/components/Navigation/Nav";
import Footer from "../src/components/Footer/Footer";

const history = createBrowserHistory();

const App = () => {
    return (
        <div>
            <Nav />
            <Router history={history}>
                <Switch>
                <Route path="/about"    component={About} />
                <Route path="/stack"    component={Stack} />
                <Route path="/work"     component={Work} />
                <Route path="/focus"    component={Focus} />
                <Route path="/"         component={Home} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
};

ReactDOM.render(
    <App />, document.getElementById('root')
);