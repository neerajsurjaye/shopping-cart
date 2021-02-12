
import React, { useState } from "react";

let BuyPage = (props) => {
    console.log(props.location.data);

    let [quan, setQuan] = useState(1);


    let updateCart = () => {
        let data = props.location.data;

        data.setItems([...data.items, {
            name: data.name,
            img: data.img,
            price: data.price,
            quan: quan
        }])


        props.history.goBack();
    }


    let changeQuan = (val) => {
        if (val == 0) {
            if (quan > 0) {
                setQuan(quan - 1);
            }
        }

        if (val == 1) {
            setQuan(quan + 1);
        }
    }

    let renderCard = () => {
        if (props.location.data == undefined) {
            return <div className="not-found">404</div>
        }


        return (
            <div className="buy-card">
                <h2>{props.location.data.name}</h2>
                <div className="line"></div>
                <div className="buy-main">
                    <img src={props.location.data.img}></img>
                    <div className="buy-data">
                        <div>Name  : {props.location.data.name}</div>
                        <div>Price : {props.location.data.price}</div>

                        <div className="counter">

                            <div className="btn" onClick={() => changeQuan(0)}>-</div>
                            <div className="display-count">{quan}</div>
                            <div className="btn" onClick={() => changeQuan(1)}>+</div>
                        </div>
                        <div className="btn-buy" onClick={() => updateCart()}>Add To Cart</div>
                    </div>
                </div>
            </div>
        )
    }

    return <div className="buy-page">
        <div className="buy-head" onClick={() => { props.history.goBack() }}>
            <div>&#60;</div>
        </div>
        {renderCard()}

    </div>
}

export default BuyPage;