import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Profile from '../Components/Profile/profile';
import List from '../Components/List/Card';

function Router({filters}) {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/profile" exact strict component={Profile} />
            <Route path="/" exact strict component={() => <List filters={filters} />} />
        </Switch>
        </BrowserRouter>
    )
}

export default Router;
