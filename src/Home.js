import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Home page
let Home = (props) => {

    let history = useHistory();


    let toShop = () => {

        history.push("./shop");

    }

    return <div className="home">
        <Header path={props.location.pathname} items={props.items.length}></Header>
        <div className="main">
            <div className="shopping-cart">Shopping-cart</div>
            <div className="btn-shop" onClick={() => toShop()}>
                <div className="btn-in">Shop</div>
            </div>
        </div>
        <Footer className="bottom"></Footer>


    </div>
}

export default Home;