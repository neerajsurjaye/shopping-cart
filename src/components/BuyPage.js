
import React from "react";

let BuyPage = (props) => {
    console.log(props);
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
                    </div>
                </div>
            </div>
        )
    }

    return <div className="buy-page">
        <div className="buy-head" onClick={() => { props.history.goBack() }}> &#60; </div>
        {renderCard()}

    </div>
}

export default BuyPage;