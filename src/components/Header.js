import React from "react";
import { Link } from "react-router-dom";

let Header = (props) => {

    let links = (path) => {
        let home = "link ";
        let shop = "link ";

        if (path == "/") {
            home = home + "underline";

        }
        else if (path == "/shop") {
            shop = shop + "underline";
        }

        return (
            <ul className="Nav">
                <li><Link className={home} to="/">Home</Link></li>
                <li><Link className={shop} to="/shop">Shop </Link></li>
                <li>Cart : {props.cart}</li>
            </ul>
        )
    }

    return (
        <div className="header">
            <div>Shopping-cart</div>
            {links(props.path)}
        </div>
    )
}

export default Header;