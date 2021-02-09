import React from "react";





let ProdCard = (props) => {
    console.log("card", props);
    return <div className="card">

        {/* <img src={data} /> */}
        <img src={props.image} />
        <div className="line"></div>
        <div className="name">{props.name}</div>
        <div className="c-bottom">
            <div className="price">${props.price}</div>
            <div className="add" onClick={() => { props.setCart(props.cart + 1) }}>+</div>
        </div>
    </div >

}

export default ProdCard;