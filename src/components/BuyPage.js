
import React, { useState } from "react";

let BuyPage = (props) => {
    // console.log(props.location.data);

    let [quan, setQuan] = useState(1);

    //Updates cart
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

    //Changes quantity
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
                <div className="line"></div>
                <div className="info">
                    <h2>Information</h2>

                    <div className="data">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet massa et consequat sodales. Ut rutrum imperdiet nibh quis molestie. Nullam at eros interdum, ultrices nisi id, semper est. Quisque hendrerit tincidunt mauris eget lobortis. Donec tristique lacus quis elit cursus, sed consectetur enim aliquet. Curabitur elementum blandit sem, sed semper lectus fringilla in. Sed eu orci sit amet sem mattis tristique. Phasellus enim nunc, lobortis vitae imperdiet sed, cursus a neque. Vestibulum massa nunc, pellentesque eu volutpat at, fermentum vel nisl. Duis interdum, risus quis rutrum euismod, libero nisi posuere metus, in varius nibh enim at enim. Sed et pellentesque eros. Fusce ex libero, venenatis ac lacus id, porta vulputate lectus. Suspendisse potenti.

                        Maecenas egestas consequat dui at sollicitudin. Duis ac lectus elit. Nunc consectetur, ipsum ut scelerisque lacinia, odio ligula pretium tellus, vitae mattis ligula lectus in arcu. Ut volutpat justo mauris, eget condimentum nibh molestie id. Morbi nisl massa, malesuada vel eleifend sit amet, ultrices et nulla. Vestibulum pulvinar ante vel sem sodales bibendum. Nullam vitae justo malesuada, condimentum odio ac, varius lorem. Nunc non mauris tellus. Cras aliquam dolor sollicitudin tellus pellentesque molestie. Suspendisse potenti.
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