import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Shop from "./Shop";

let Router = () => {
    let [cart, setCart] = useState(0);


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={(props) => <Home {...props} cart={cart} setCart={setCart}></Home>}></Route>
                <Route exact path="/shop" component={(props) => <Shop {...props} cart={cart} setCart={setCart}></Shop>}></Route>
            </Switch >
        </BrowserRouter >
    )
}

export default Router; 