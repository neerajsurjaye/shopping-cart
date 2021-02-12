import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import BuyPage from "./components/BuyPage"

let Router = () => {

    let [items, setItems] = useState([]);


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={(props) => <Home {...props} setItems={setItems} items={items}></Home>}></Route>
                <Route exact path="/shop" component={(props) => <Shop {...props} setItems={setItems} items={items}></Shop>}></Route>
                <Route exact path="/cart" component={(props) => <Cart {...props} setItems={setItems} items={items}></Cart>}></Route>
                <Route exact path="/buypage" component={BuyPage}></Route>
            </Switch >
        </BrowserRouter >
    )
}

export default Router; 