import React from "react";





let ProdCard = (props) => {

    let updateCart = () => {
        props.setItems([...props.items, {
            name: props.name,
            img: props.image,
            price: props.price
        }])
    }
    // console.log("card", props);
    return <div className="card">

        {/* <img src={data} /> */}
        <img src={props.image} />
        <div className="line"></div>
        <div className="name">{props.name}</div>
        <div className="c-bottom">
            <div className="price">${props.price}</div>
            <div className="add" onClick={() => { updateCart() }}>+</div>
        </div>
    </div >

}

export default ProdCard;