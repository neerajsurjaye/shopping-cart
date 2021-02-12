import React from "react";
import { Link } from "react-router-dom";





let ProdCard = (props) => {

    let updateCart = () => {
        props.setItems([...props.items, {
            name: props.name,
            img: props.image,
            price: props.price,
            quan: 1
        }])
    }

    let data = {
        name: props.name,
        img: props.image,
        price: props.price,
        setItems: props.setItems,
        items: props.items
    }
    // console.log("card", props);
    return <div className="card">

        {/* <img src={data} /> */}
        <img src={props.image} />
        <div className="line"></div>
        <div className="name">{props.name}</div>
        <div className="c-bottom">
            <div className="price">${props.price}</div>
            <Link className="add" to={{ pathname: "/buypage", data: data }}>BUY</Link>
        </div>
    </div >

}

export default ProdCard;