import React from "react";


let Items = (props) => {
    return (
        <div className="cart-card">
            <div className="cart-head">
                <h1 className="cart-title">{props.data.name}</h1>
                <div className="cross">X</div>
            </div>
            <div className="line"></div>
            <div>data</div>
        </div>
    )
}

export default Items;