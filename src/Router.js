import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Shop from "./Shop";

let Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/shop" component={Shop}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;