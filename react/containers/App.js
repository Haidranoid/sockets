import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/css/style.css'

import Home from "./home/Home";
import Desktop from "./desktop/Desktop";
import GenerateTicket from "./generate-ticket/GenerateTicket";
import Viewer from "./viewer/Viewer";
import GlobalStyles from "../GlobalStyles";

const App = () => {
    return (
        <Router>
            <GlobalStyles/>
            <Switch>
                <Route exact path="/generate-ticket" component={GenerateTicket}/>
                <Route exact path="/desktop" component={Desktop}/>
                <Route exact path="/viewer" component={Viewer}/>
                <Route exact path="/" component={Home}/>

                <Route component={() => <div>Not found</div>}/>
            </Switch>
        </Router>
    )
};

export default App;
