import React, { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";


let Cart = (props) => {
    let [upd, setUpd] = useState(0);

    let genCards = (items) => {
        let cards = [];
        console.log(items);
        for (let i = 0; i < items.length; i++) {
            cards.push(<Items key={i} data={items[i]} index={i} items={props.items} setItems={props.setItems} upd={upd} setUpd={setUpd}></Items >);
        }

        return cards;
    }

    return <div className="cart">
        <Header path={props.location.pathname} items={props.items.length}></Header>
        {genCards(props.items)}
        <div className="btn-check">Proceed To Checkout</div>
    </div>
}

export default Cart;