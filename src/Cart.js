import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";


let Cart = (props) => {
    let genCards = (items) => {
        let cards = [];
        for (let i = 0; i < items.length; i++) {
            cards.push(<Items data={items[i]} ></Items >);
        }

        return cards;
    }

    return <div className="cart">
        <Header path={props.location.pathname} items={props.items.length}></Header>
        {genCards(props.items)}
    </div>
}

export default Cart;