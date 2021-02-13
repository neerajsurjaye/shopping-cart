import React from "react";


let Items = (props) => {

    //Romoves card
    let removeCard = (i) => {

        let tempItems = props.items;
        tempItems.splice(i, 1);
        props.setItems(tempItems);

        props.setUpd(props.upd + 1);

    }

    // console.log(props.items);
    return (
        <div className="cart-card">
            <div className="cart-head">
                <h1 className="cart-title">{props.data.name}</h1>
                <div className="cross" onClick={() => { removeCard(props.index) }}>X</div>
            </div>
            <div className="line"></div>
            <div className="cart-body">
                <img src={props.data.img} />
                <div className="cart-data">
                    <div>Name  : {props.data.name}</div>
                    <div>Quan  : {props.data.quan}</div>
                    <div>price : {props.data.price}</div>
                    <div>Total : {props.data.price * props.data.quan}</div>
                </div>
            </div>
        </div>
    )
}

export default Items;