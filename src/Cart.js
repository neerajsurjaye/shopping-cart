import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/Header";
import Items from "./components/Items";


let Cart = (props) => {
    let [upd, setUpd] = useState(0);
    let history = useHistory();

    //Returns jsx total and price
    let calTotal = () => {
        let total = 0;
        let items = 0;

        // console.log(props.items);

        for (let i = 0; i < props.items.length; i++) {
            // console.log(props.items[i])
            total += props.items[i].price * props.items[i].quan;
            items += props.items[i].quan;
        }

        // console.log(total, items);



        return <div className="total">
            <div>Items : {items}</div>
            <div className="fi-total">Total : ${total}</div>
        </div>
    }

    //Generates cards
    let genCards = (items) => {
        let cards = [];
        // console.log(items);
        if (items.length == 0) {
            return <div className="empty">
                Empty Cart
            </div>
        }

        for (let i = 0; i < items.length; i++) {
            cards.push(<Items key={i} data={items[i]} index={i} items={props.items} setItems={props.setItems} upd={upd} setUpd={setUpd}></Items >);
        }

        return cards;
    }

    return <div className="cart">
        <Header path={props.location.pathname} items={props.items.length}></Header>
        {calTotal()}

        {genCards(props.items)}
        <div className="btn-check" onClick={() => { history.push("/buy") }}>Proceed To Checkout</div>
    </div>
}

export default Cart;