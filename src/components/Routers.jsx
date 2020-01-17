import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "../App";
import NotFound from "./NotFound";

const Routers = () => (
    <Router>
      <Switch>
        <Route exact path='/' component={StorePicker} />
        <Route path='/store/:storeId' component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
);

export default Routers;