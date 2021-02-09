import React from "react";
import Header from "./components/Header";

let home = (props) => {
    console.log(props);

    return <div className="home">
        <Header path={props.location.pathname} cart={props.cart}></Header>
        <div className="main">
            <div className="shopping-cart">Shopping-cart</div>
        </div>

    </div>
}

export default home;