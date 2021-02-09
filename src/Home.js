import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./components/Header";

let Home = (props) => {
    console.log(props);
    let history = useHistory();

    let toShop = () => {

        history.push("./shop");

    }

    return <div className="home">
        <Header path={props.location.pathname} cart={props.cart}></Header>
        <div className="main">
            <div className="shopping-cart">Shopping-cart</div>
            <div className="btn-shop" onClick={() => toShop()}>Shop</div>
        </div>
        <div className="footer">
            <h2>About us</h2>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus sapien eget nulla posuere, et vestibulum mauris tempor. Vestibulum gravida tempus ante, quis fermentum orci auctor ac. Vestibulum nec leo orci. Maecenas sit amet turpis at metus dignissim auctor. Phasellus eget tellus feugiat, auctor augue a, sagittis magna. Integer blandit odio lacus. Duis a blandit arcu. Aenean ut enim sed mi fringilla vestibulum eget in diam. Nullam sollicitudin quam at erat posuere mollis. Aliquam erat volutpat. In ultricies molestie odio, at porta nulla egestas vitae. Fusce orci est, elementum vel ex eu, volutpat hendrerit nibh. Nam feugiat eu nulla id ornare. </div>
        </div>

    </div>
}

export default Home;